import {
  Body,
  HttpException,
  HttpStatus,
  Injectable,
  Param,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Medicine } from 'src/entitys/medicine';
import { Repository } from 'typeorm';
import { CreateMedicineDTO } from './dto/create.medicine.dto';
import { UpdateMedicineDTO } from './dto/update.medicine.dto';
import { Doctor } from 'src/entitys/doctor';

@Injectable()
export class MedicineService {
  constructor(
    @InjectRepository(Medicine)
    public readonly medicineRepository: Repository<Medicine>,
    @InjectRepository(Doctor)
    public readonly doctorRepository: Repository<Doctor>,
  ) {}

  async getAll() {
    try {
      return await this.medicineRepository.find({
        relations: {
          doctor: true,
        },
      });
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  async create(@Body() createMedicineDTO: CreateMedicineDTO) {
    try {
      const { ...medicine } = createMedicineDTO;

      const medicineData = this.medicineRepository.create(medicine);
      const saveMedicine = await this.medicineRepository.save(medicineData);
      return saveMedicine;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(id: number, updateDto: UpdateMedicineDTO) {
    try {
      const ifExist = await this.medicineRepository.findOne({
        where: {
          id,
        },
        relations: ['doctor'],
      });

      if (ifExist) {
        if (updateDto.doctorId) {
          const doctor = await this.doctorRepository.findOne({
            where: { id: updateDto.doctorId },
          });
          if (!doctor) {
            throw new HttpException(`Doctor not found`, HttpStatus.NOT_FOUND);
          }
          ifExist.doctor = doctor;
        }

        Object.assign(ifExist, updateDto);
        return await this.medicineRepository.save(ifExist);
      } else {
        throw new HttpException(`Medicine not found`, HttpStatus.NOT_FOUND);
      }
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getPriorityMedicine() {
    try {
      return await this.medicineRepository.find({
        where: {
          priorityStatus: 1,
        },
        select: {
          medicineName: true,
          strength: true,
        },
        order: {
          slNo: 'ASC',
        },
        take: 20,
      });
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
