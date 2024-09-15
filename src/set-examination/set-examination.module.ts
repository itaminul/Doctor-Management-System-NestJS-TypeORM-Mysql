import { Module } from '@nestjs/common';
import { SetExaminationService } from './set-examination.service';
import { SetExaminationController } from './set-examination.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SetExamination } from 'src/entitys/setExamination';

@Module({
  imports: [TypeOrmModule.forFeature([SetExamination])],
  providers: [SetExaminationService],
  controllers: [SetExaminationController]
})
export class SetExaminationModule {}
