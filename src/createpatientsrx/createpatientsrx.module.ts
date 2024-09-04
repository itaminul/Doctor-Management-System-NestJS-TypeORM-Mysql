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

@Module({
  imports: [TypeOrmModule.forFeature([Patientsrx, Rxmedicine, Rxexaminations, RxInvestigations, RxAdvice, Rxcomplains, Medicine])],
  providers: [CreatepatientsrxService],
  controllers: [CreatepatientsrxController]
})
export class CreatepatientsrxModule {}
