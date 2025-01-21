import { Module } from '@nestjs/common';
import { SetPackagesService } from './set-packages.service';
import { SetPackagesController } from './set-packages.controller';

@Module({
  providers: [SetPackagesService],
  controllers: [SetPackagesController]
})
export class SetPackagesModule {}
