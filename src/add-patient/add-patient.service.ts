import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { pat_patients_info } from 'src/entitys/pat_patients_info';
import { Repository } from 'typeorm';
import { AddPatientDto } from './dto/create.patient.dto';


@Injectable()
export class AddPatientService {
  constructor(
    @InjectRepository(pat_patients_info)
    public readonly addPatientRepository: Repository<pat_patients_info>,
  ) {}

  async create(addPatientsDTO: AddPatientDto) {
    const { ...addPataDTO } = addPatientsDTO;
    const getData = this.addPatientRepository.create(addPataDTO);
    const saveData = await this.addPatientRepository.save(getData);
    return saveData;
  }
}
