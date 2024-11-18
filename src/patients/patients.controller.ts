import { Controller, Get, Param, Patch } from '@nestjs/common';
import { PatientsService } from './patients.service';

@Controller('patients')
export class PatientsController {
  constructor(public readonly patientsService: PatientsService) {}
  @Get()
  async getAll() {
    return await this.patientsService.getAll();
  }

  @Get('get-all-pending-patients')
  async getAllPendingPatients() {
    return await this.patientsService.getAllPendingPatients();
  }

  @Get('/get-pending-patients-info-by-id/:id')
  async getPendingPatientsInformationById(@Param('id') id: number) {
    return await this.patientsService.getPendingPatientsInformationById(id);
  }

  @Get('get-twentity-pending-patients')
  async getNewTwentityPendingPatients() {
    return await this.patientsService.getNewTwentityPendingPatients();
  }
}
