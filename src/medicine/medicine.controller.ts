import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Medicine } from 'src/entitys/medicine';
import { Repository } from 'typeorm';
import { CreateMedicineDTO } from './dto/create.medicine.dto';
import { MedicineService } from './medicine.service';

@Controller('medicine')
export class MedicineController {
    constructor(
        @InjectRepository(Medicine)
        public readonly medicineRepository: Repository<Medicine>,
        public readonly medicineService: MedicineService
    ) {}

    @Post()
    async create(@Body() createMedicineDto:CreateMedicineDTO) {
        try {
            const results = await this.medicineService.create(createMedicineDto);           
            return {
              success: true,
              statusCode: HttpStatus.OK,
              message: "Createded successfully",
              data: results,
            };
          } catch (error) {
            if (error instanceof HttpException) {
              throw error;
            } else {
              throw new HttpException(
                "Failed to create",
                HttpStatus.INTERNAL_SERVER_ERROR
              );
            }
          }
    }
}
