import { Module } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { PatientsController } from './patients.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { pat_patients_info } from 'src/entitys/pat_patients_info';

@Module({
  imports:[
    TypeOrmModule.forFeature([pat_patients_info])
  ],
  providers: [PatientsService],
  controllers: [PatientsController]
})
export class PatientsModule {}
