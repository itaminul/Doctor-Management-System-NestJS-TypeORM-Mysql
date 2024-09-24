import { Module } from '@nestjs/common';
import { SetupAdviceService } from './setup-advice.service';
import { SetupAdviceController } from './setup-advice.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SetAdvice } from 'src/entitys/setAdvice';

@Module({
  imports: [TypeOrmModule.forFeature([SetAdvice])],
  providers: [SetupAdviceService],
  controllers: [SetupAdviceController],
})
export class SetupAdviceModule {}
