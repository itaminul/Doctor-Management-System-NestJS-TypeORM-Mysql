import { Module } from '@nestjs/common';
import { SetOnExaminationService } from './set-on-examination.service';
import { SetOnExaminationController } from './set-on-examination.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SetOnExamination } from 'src/entitys/setOnExamination';

@Module({
  imports: [TypeOrmModule.forFeature([SetOnExamination])],
  providers: [SetOnExaminationService],
  controllers: [SetOnExaminationController],
})
export class SetOnExaminationModule {}
