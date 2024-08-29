import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Patientsrx } from 'src/entitys/patientsrx';
import { Rxexaminations } from 'src/entitys/rxexaminations';
import { Rxmedicine } from 'src/entitys/rxmedicine';
import { Repository } from 'typeorm';
import { CreatePatientsRxDTO } from './dto/patientrx.dto';
import { UpdatePatientsRxDTO } from './dto/updatePatientrx.dto';

@Injectable()
export class CreatepatientsrxService {
    constructor(
        @InjectRepository(Patientsrx)
        public readonly patientRxRepository: Repository<Patientsrx>,
        @InjectRepository(Rxmedicine)
        public readonly rxMedicineRepository: Repository<Rxmedicine>,
        @InjectRepository(Rxexaminations)
        public readonly rxExaminationsRepository: Repository<Rxexaminations>
    ) {}


    async getAll() {
        const data =  await this.patientRxRepository.find({
            relations: {
                rxmedicine: true,
                rxexaminations: true
            }
        });
        return data;
    }

    async create (@Body() createPatientDto: CreatePatientsRxDTO) {
        const {rxmedicine, rxexaminations, ...patientData} = createPatientDto;        
        console.log(createPatientDto);
        const patientDataa = this.patientRxRepository.create(patientData);
        const savePatientRx = await this.patientRxRepository.save(patientDataa);
        const medicines = rxmedicine.map(medicineDto => {
            const medicine  = this.rxMedicineRepository.create({
                ...medicineDto,
                patientsrx: savePatientRx
            })
            return medicine;
        })
        await this.rxMedicineRepository.save(medicines);

        const examinations = rxexaminations.map(examinationDto => {
            const examination = this.rxExaminationsRepository.create({
                ...examinationDto,
                patientsrx: savePatientRx,
            })
            return examination;
        })
        await this.rxExaminationsRepository.save(examinations);
        return savePatientRx;

    }

    async update(id: number, updatePatientsRxDTO:UpdatePatientsRxDTO ) {
        const { rxmedicine, rxexaminations, ...patientData } = updatePatientsRxDTO;
        const patient = await this.patientRxRepository.findOne({
            where: {id},
            relations: ['rxmedicine', 'rxexaminations']
        })
        console.log(patient);

        if(!patient) {
            throw new Error('Patient not found');
        }
        Object.assign(patient, patientData);
        await this.patientRxRepository.save(patient);


        //medicine update start

        if(rxmedicine) {
            patient.rxmedicine = patient.rxmedicine.filter(medicine => 
                rxmedicine.some(m => m.id === medicine.id)
            )

           if(rxmedicine) {
            const updateMedicines = [];
            for(const medicineDto of rxmedicine) {
                if(medicineDto.id) {
                    const existingMedicine = await this.rxMedicineRepository.findOne({
                        where: {id: medicineDto.id, patientsrx: {id: patient.id}}
                    })
                    if(existingMedicine) {
                        Object.assign(existingMedicine, medicineDto);
                        await this.rxMedicineRepository.save(existingMedicine);
                        updateMedicines.push(existingMedicine)
                    }
                }else {
                    const newMedicine = this.rxMedicineRepository.create({
                        ...medicineDto,
                        patientsrx: patient
                    })
                    const savedMedicine = await this.rxMedicineRepository.save(newMedicine);
                    updateMedicines.push(savedMedicine)
                }

            }
            patient.rxmedicine = updateMedicines;
           }
           
        }

        //examination start

        if (rxexaminations) {
            // Filter out examinations that are not in the update DTO
            patient.rxexaminations = patient.rxexaminations.filter(examination =>
                rxexaminations.some(e => e.id === examination.id)
            );
        
            const updateExaminations = [];
        
            for (const rxexaminationDto of rxexaminations) {
                if (rxexaminationDto.id) {
                    // Find the existing examination record by its ID
                    const existingExamination = await this.rxExaminationsRepository.findOne({
                        where: { id: rxexaminationDto.id, patientsrx: { id: patient.id } },
                    });
        
                    if (existingExamination) {
                        // Update the existing examination record
                        Object.assign(existingExamination, rxexaminationDto);
                        await this.rxExaminationsRepository.save(existingExamination);
                        updateExaminations.push(existingExamination);
                    }
                } else {
                    // Create a new examination record
                    const newExamination = this.rxExaminationsRepository.create({
                        ...rxexaminationDto,
                        patientsrx: patient, // Maintain the relationship with the parent
                    });
        
                    const savedExamination = await this.rxExaminationsRepository.save(newExamination);
                    updateExaminations.push(savedExamination);
                }
            }
        
            // Update the patient with the updated/new examinations
            patient.rxexaminations = updateExaminations;
        }
        


        return this.patientRxRepository.save(patient)
    }
}
