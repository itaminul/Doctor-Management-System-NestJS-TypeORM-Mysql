import { Module } from '@nestjs/common';
import { CreatepatientsrxService } from './createpatientsrx.service';
import { CreatepatientsrxController } from './createpatientsrx.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Patientsrx } from 'src/entitys/patientsrx';
import { Rxmedicine } from 'src/entitys/rxmedicine';
import { Rxexaminations } from 'src/entitys/rxexaminations';
import { RxInvestigations } from 'src/entitys/rxinvestigations';
import { RxAdvice } from 'src/entitys/rxadvice';
import { Rxcomplains } from 'src/entitys/rxcomplains';
import { Medicine } from 'src/entitys/medicine';
import { Set_investigations } from 'src/entitys/set_investigations';
import { Complains } from 'src/entitys/complains';
import { SetAdvice } from 'src/entitys/setAdvice';
import { SetExamination } from 'src/entitys/setExamination';
import { pat_patients_info } from 'src/entitys/pat_patients_info';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Patientsrx,
      Rxmedicine,
      Rxexaminations,
      RxInvestigations,
      RxAdvice,
      Rxcomplains,
      Medicine,
      Set_investigations,
      Complains,
      SetAdvice,
      SetExamination,
      pat_patients_info
    ]),
  ],
  providers: [CreatepatientsrxService],
  controllers: [CreatepatientsrxController],
})
export class CreatepatientsrxModule {}
