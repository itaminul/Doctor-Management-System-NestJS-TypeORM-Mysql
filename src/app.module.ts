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


@Module({
  imports: [ TypeOrmModule.forRoot(AppDataSource), CreatepatientsrxModule, MedicineModule, ComplainModule, SetInvestigationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
