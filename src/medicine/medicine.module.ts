import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Medicine } from 'src/entitys/medicine';
import { Rxmedicine } from 'src/entitys/rxmedicine';
import { MedicineController } from './medicine.controller';
import { MedicineService } from './medicine.service';

@Module({
    imports: [TypeOrmModule.forFeature([Medicine])],
    controllers: [MedicineController],
    providers: [MedicineService]
})
export class MedicineModule {}
