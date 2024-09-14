import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Medicine } from 'src/entitys/medicine';
import { Repository } from 'typeorm';
import { CreateMedicineDTO } from './dto/create.medicine.dto';

@Injectable()
export class MedicineService {
    constructor( @InjectRepository(Medicine)
    public readonly medicineRepository: Repository<Medicine>
) {}

async create(@Body() createMedicineDTO:CreateMedicineDTO) {
    const {...medicine} = createMedicineDTO;
    
    const medicineData =  this.medicineRepository.create(medicine)
    const saveMedicine = await this.medicineRepository.save(medicineData)
    return saveMedicine;

}

}
