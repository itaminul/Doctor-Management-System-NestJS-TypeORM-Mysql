import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from './data-source';
import { CreatepatientsrxController } from './createpatientsrx/createpatientsrx.controller';
import { CreatepatientsrxModule } from './createpatientsrx/createpatientsrx.module';
import { MedicineModule } from './medicine/medicine.module';
import { ComplainModule } from './complain/complain.module';
import { SetInvestigationModule } from './set-investigation/set-investigation.module';
import { SetupAdviceModule } from './setup-advice/setup-advice.module';
import { SetExaminationModule } from './set-examination/set-examination.module';
import { DoctorModule } from './doctor/doctor.module';
import { UsersModule } from './users/users.module';
import { PatientsModule } from './patients/patients.module';
import { SetPlainModule } from './set-plain/set-plain.module';
import { SetPackagesModule } from './set-packages/set-packages.module';
import { SetOnExaminationModule } from './set-on-examination/set-on-examination.module';
import { CacheModule } from '@nestjs/cache-manager';
import { AddPatientModule } from './add-patient/add-patient.module';

@Module({
  imports: [
    CacheModule.register(),
    TypeOrmModule.forRoot(AppDataSource),
    CreatepatientsrxModule,
    MedicineModule,
    ComplainModule,
    SetInvestigationModule,
    SetupAdviceModule,
    SetExaminationModule,
    DoctorModule,
    UsersModule,
    PatientsModule,
    SetPlainModule,
    SetPackagesModule,
    SetOnExaminationModule,
    AddPatientModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
