import { Controller, Get } from '@nestjs/common';
import { DoctorService } from './doctor.service';

@Controller('doctor')
export class DoctorController {
  constructor(public readonly setupDoctorService: DoctorService) {}

  @Get()
  async getAll() {
    return await this.setupDoctorService.getAll();
  }
}
