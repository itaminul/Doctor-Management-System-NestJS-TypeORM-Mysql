import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SetAdvice } from 'src/entitys/setAdvice';
import { Repository } from 'typeorm';
import { CreateSetupAdviceDto } from './dto/create.advice.setup.dto';

@Injectable()
export class SetupAdviceService {
  constructor(
    @InjectRepository(SetAdvice)
    public readonly setupAdviceRepository: Repository<SetAdvice>,
  ) {}

  async getAll() {
    try {
      const results = await this.setupAdviceRepository.find();
      return results;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async create(createSetupAdvice: CreateSetupAdviceDto) {
    try {
      const { ...setupMedicine } = createSetupAdvice;
      const setupAdviceData = this.setupAdviceRepository.create(setupMedicine);
      const saveData = await this.setupAdviceRepository.save(setupAdviceData);
      return saveData;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(id: number, createSetupAdviceDto: CreateSetupAdviceDto) {
    try {
      const adviceetupData = await this.setupAdviceRepository.findOne({
        where: {
          id: id,
        },
      });

      if (!adviceetupData) {
        throw new NotFoundException(`Exam setup with ID ${id} not found`);
      }

      Object.assign(adviceetupData, createSetupAdviceDto);

      return await this.setupAdviceRepository.save(adviceetupData);
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
