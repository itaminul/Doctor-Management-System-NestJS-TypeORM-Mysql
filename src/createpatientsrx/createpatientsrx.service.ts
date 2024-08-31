import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Patientsrx } from 'src/entitys/patientsrx';
import { Rxexaminations } from 'src/entitys/rxexaminations';
import { Rxmedicine } from 'src/entitys/rxmedicine';
import { Repository } from 'typeorm';
import { CreatePatientsRxDTO } from './dto/patientrx.dto';
import { UpdatePatientsRxDTO } from './dto/updatePatientrx.dto';
import { RxInvestigations } from 'src/entitys/rxinvestigations';
import { RxAdvice } from 'src/entitys/rxadvice';
import { Rxcomplains } from 'src/entitys/rxcomplains';

@Injectable()
export class CreatepatientsrxService {
    constructor(
        @InjectRepository(Patientsrx)
        public readonly patientRxRepository: Repository<Patientsrx>,
        @InjectRepository(Rxmedicine)
        public readonly rxMedicineRepository: Repository<Rxmedicine>,
        @InjectRepository(Rxexaminations)
        public readonly rxExaminationsRepository: Repository<Rxexaminations>,
        @InjectRepository(RxInvestigations)
        public readonly rxInvestigationsRepository: Repository<RxInvestigations>,
        @InjectRepository(RxAdvice)
        public readonly rxAdviceRepository: Repository<RxAdvice>,
        @InjectRepository(Rxcomplains)
        public readonly rxComplainRepositor: Repository<Rxcomplains>

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
        const {rxmedicine, rxexaminations, rxInvestigations, rxadvice, rxComplains, ...patientData} = createPatientDto;   
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

        //investigation

        const investigations = rxInvestigations.map(investigationDto => {
            
            const investigation = this.rxInvestigationsRepository.create({
                ...investigationDto,
                patientsrx: savePatientRx,
            })
            return investigation;
        })
        await this.rxInvestigationsRepository.save(investigations);

        //rxadvice
        const rxadvices = rxadvice.map(rxAdviceDto => {
           const advice = this.rxAdviceRepository.create({
            ...rxAdviceDto,
            patientsrx: savePatientRx
           })
           return advice;
        })
        await this.rxAdviceRepository.save(rxadvices)

        //rxComplains

        const rxcomplain = rxComplains.map(rxComplainDto => {
            const complain = this.rxComplainRepositor.create({
                ...rxComplainDto,
                patientsrx: savePatientRx
            })
            return complain;
        })
        await this.rxComplainRepositor.save(rxcomplain)

     
        return savePatientRx;

    }

    async update(id: number, updatePatientsRxDTO:UpdatePatientsRxDTO ) {
        const { rxmedicine, rxexaminations, rxInvestigations, rxAdvice, rxComplains, ...patientData } = updatePatientsRxDTO;
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

        //investigation start

        if(rxInvestigations) {
            patient.rxInvestigations = patient.rxInvestigations.filter(investigatin => 
                rxInvestigations.some(i => i.id === investigatin.id )
            )
            const updateInvestigation = [];
            for(const rxInvestigationDto of rxInvestigations) {
                if(rxInvestigationDto.id) {
                    const existingInvestigation = await this.rxInvestigationsRepository.findOne({
                        where: { id: rxInvestigationDto.id, patientsrx: { id: patient.id }}
                    })
                    if(existingInvestigation) {
                        Object.assign(existingInvestigation, rxInvestigationDto);
                        await this.rxInvestigationsRepository.save(existingInvestigation)
                        updateInvestigation.push(existingInvestigation)
                    }
                }else{
                    const newInvestigation = this.rxInvestigationsRepository.create({
                        ...rxInvestigationDto,
                        patientsrx: patient
                    })
                    const saveInvestigation = await this.rxInvestigationsRepository.save(newInvestigation);
                    updateInvestigation.push(saveInvestigation);
                }
            }
            patient.rxInvestigations = updateInvestigation;
        }

        
        if(rxAdvice) {
            patient.rxAdvice = patient.rxAdvice.filter(advice => 
                rxAdvice.some(i => i.id === advice.id )
            )
            const updateAdvice = [];
            for(const rxAdviceDto of rxAdvice) {
                if(rxAdviceDto.id) {
                    const existingAdvice = await this.rxAdviceRepository.findOne({
                        where: { id: rxAdviceDto.id, patientsrx: { id: patient.id }}
                    })
                    if(existingAdvice) {
                        Object.assign(existingAdvice, rxAdviceDto);
                        await this.rxAdviceRepository.save(existingAdvice)
                        updateAdvice.push(existingAdvice)
                    }
                }else{
                    const newAdvice = this.rxAdviceRepository.create({
                        ...rxAdviceDto,
                        patientsrx: patient
                    })
                    const saveAdvice = await this.rxAdviceRepository.save(newAdvice);
                    updateAdvice.push(saveAdvice);
                }
            }
            patient.rxAdvice = updateAdvice;
        }

        if(rxComplains) {
            patient.rxComplains = patient.rxComplains.filter(complains => 
                rxComplains.some(j => j.id === complains.id)
            )
            const updateComplains = [];
            for(const rxComplainDto of rxComplains) {
                if(rxComplainDto.id) {
                    const existingComplains = await this.rxComplainRepositor.findOne({
                        where: { id: rxComplainDto.id, patientsrx: { id: patient.id}}
                    })

                    if(existingComplains) {
                        Object.assign(existingComplains, rxComplainDto);
                        await this.rxComplainRepositor.save(existingComplains)
                        updateComplains.push(existingComplains)
                    }
                }else{
                    const newComplains = this.rxComplainRepositor.create({
                        ...rxComplainDto,
                        updated_at: new Date(),
                        patientsrx: patient
                    })
                    const saveComplains = await this.rxComplainRepositor.save(newComplains)
                    updateComplains.push(saveComplains)
                }
            }
            patient.rxComplains = updateComplains;
        }
    
        


        return this.patientRxRepository.save(patient)
    }
}
