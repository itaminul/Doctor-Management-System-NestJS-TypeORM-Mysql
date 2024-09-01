import { Module } from '@nestjs/common';
import { CreatepatientsrxService } from './createpatientsrx.service';
import { CreatepatientsrxController } from './createpatientsrx.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Patientsrx } from 'src/entitys/patientsrx';
import { Rxmedicine } from 'src/entitys/rxmedicine';
import { Rxexaminations } from 'src/entitys/rxexaminations';
import { RxInvestigations } from 'src/entitys/rxinvestigations';

@Module({
  imports: [TypeOrmModule.forFeature([Patientsrx, Rxmedicine, Rxexaminations, RxInvestigations])],
  providers: [CreatepatientsrxService],
  controllers: [CreatepatientsrxController]
})
export class CreatepatientsrxModule {}
