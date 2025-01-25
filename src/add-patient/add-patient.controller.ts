import { Body, Controller, Post } from '@nestjs/common';
import { AddPatientService } from './add-patient.service';
import { AddPatientDto } from './dto/create.patient.dto';

@Controller('add-patient')
export class AddPatientController {
  constructor(public readonly addPatientService: AddPatientService) {}
  @Post()
  async create(@Body() createPatientsDTO: AddPatientDto) {
    return await this.addPatientService.create(createPatientsDTO);
  }
}
