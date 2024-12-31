import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SetExamination } from 'src/entitys/setExamination';
import { Repository } from 'typeorm';
import { SetupExaminationDto } from './dto/create.set.examination.dto';
import { UpdateExaminationDto } from './dto/update.set.examination.dto';

@Injectable()
export class SetExaminationService {
  constructor(
    @InjectRepository(SetExamination)
    public readonly setExaminationRepository: Repository<SetExamination>,
  ) {}

  async getAll() {
    try {
      const results = await this.setExaminationRepository.find({
        order: {
          slNo: 'ASC'
        }
      });
      return results;
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

  async create(createSetupExamination: SetupExaminationDto) {
    try {
      const examSetupdata = this.setExaminationRepository.create(
        createSetupExamination,
      );
      const dataSave = await this.setExaminationRepository.save(examSetupdata);
      return dataSave;
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

  async update(id: number, updateExaminationDto: UpdateExaminationDto) {
    try {
      console.log('id', id);
      const examSetupData = await this.setExaminationRepository.findOne({
        where: {
          id: id,
        },
      });

      if (!examSetupData) {
        throw new NotFoundException(`Exam setup with ID ${id} not found`);
      }

      Object.assign(examSetupData, updateExaminationDto);


      return await this.setExaminationRepository.save(examSetupData);
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
