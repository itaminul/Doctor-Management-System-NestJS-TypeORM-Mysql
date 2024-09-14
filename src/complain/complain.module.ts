import { Module } from '@nestjs/common';
import { ComplainController } from './complain.controller';
import { ComplainService } from './complain.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Complains } from 'src/entitys/complains';

@Module({
  imports: [
    TypeOrmModule.forFeature([Complains])
  ],
  controllers: [ComplainController],
  providers: [ComplainService]
})
export class ComplainModule {}
