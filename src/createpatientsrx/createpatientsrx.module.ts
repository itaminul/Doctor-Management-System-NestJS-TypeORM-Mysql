import { Module } from '@nestjs/common';
import { CreatepatientsrxService } from './createpatientsrx.service';
import { CreatepatientsrxController } from './createpatientsrx.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Patientsrx } from 'src/entitys/patientsrx';
import { Rxmedicine } from 'src/entitys/rxmedicine';
import { Rxexaminations } from 'src/entitys/rxexaminations';

@Module({
  imports: [TypeOrmModule.forFeature([Patientsrx, Rxmedicine, Rxexaminations])],
  providers: [CreatepatientsrxService],
  controllers: [CreatepatientsrxController]
})
export class CreatepatientsrxModule {}
