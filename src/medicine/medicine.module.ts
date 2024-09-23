import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Medicine } from 'src/entitys/medicine';
import { Rxmedicine } from 'src/entitys/rxmedicine';
import { MedicineController } from './medicine.controller';
import { MedicineService } from './medicine.service';
import { Doctor } from 'src/entitys/doctor';

@Module({
  imports: [TypeOrmModule.forFeature([Medicine, Doctor])],
  controllers: [MedicineController],
  providers: [MedicineService],
})
export class MedicineModule {}
