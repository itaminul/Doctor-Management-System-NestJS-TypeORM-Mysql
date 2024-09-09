import { Module } from '@nestjs/common';
import { SetInvestigationService } from './set-investigation.service';
import { SetInvestigationController } from './set-investigation.controller';

@Module({
  providers: [SetInvestigationService],
  controllers: [SetInvestigationController]
})
export class SetInvestigationModule {}
