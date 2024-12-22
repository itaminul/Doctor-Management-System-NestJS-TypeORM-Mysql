import { Module } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { PatientsController } from './patients.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { pat_patients_info } from 'src/entitys/pat_patients_info';
import { Patientsrx } from 'src/entitys/patientsrx';

@Module({
  imports:[
    TypeOrmModule.forFeature([pat_patients_info, Patientsrx])
  ],
  providers: [PatientsService],
  controllers: [PatientsController]
})
export class PatientsModule {}
