import { Module } from '@nestjs/common';
import { SetPlainService } from './set-plain.service';
import { SetPlainController } from './set-plain.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SetPlain } from 'src/entitys/setPlan';

@Module({
  imports: [TypeOrmModule.forFeature([SetPlain])],
  providers: [SetPlainService],
  controllers: [SetPlainController]
})
export class SetPlainModule {}
