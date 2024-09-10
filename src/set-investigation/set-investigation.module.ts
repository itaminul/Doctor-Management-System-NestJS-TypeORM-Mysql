import { Module } from '@nestjs/common';
import { SetInvestigationService } from './set-investigation.service';
import { SetInvestigationController } from './set-investigation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Set_investigations } from 'src/entitys/set_investigations';

@Module({
  imports: [TypeOrmModule.forFeature([Set_investigations])],
  providers: [SetInvestigationService],
  controllers: [SetInvestigationController]
})
export class SetInvestigationModule {}
