import { Module } from '@nestjs/common';
import { AddPatientService } from './add-patient.service';
import { AddPatientController } from './add-patient.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { pat_patients_info } from 'src/entitys/pat_patients_info';

@Module({
  imports: [TypeOrmModule.forFeature([pat_patients_info])],
  providers: [AddPatientService],
  controllers: [AddPatientController],
})
export class AddPatientModule {}
