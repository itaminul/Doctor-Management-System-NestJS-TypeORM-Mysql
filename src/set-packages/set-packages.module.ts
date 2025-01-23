import { Module } from '@nestjs/common';
import { SetPackagesService } from './set-packages.service';
import { SetPackagesController } from './set-packages.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SetPackage } from 'src/entitys/setPackage';

@Module({
  imports: [TypeOrmModule.forFeature([SetPackage])],
  providers: [SetPackagesService],
  controllers: [SetPackagesController],
})
export class SetPackagesModule {}
