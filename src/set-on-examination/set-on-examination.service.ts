import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SetOnExamination } from 'src/entitys/setOnExamination';
import { IsNull, Not, Repository } from 'typeorm';
import { SetOnExaminationDto } from './dto/create.set.on-examination.dto';

@Injectable()
export class SetOnExaminationService {
  constructor(
    @InjectRepository(SetOnExamination)
    public readonly setOnExaminationRepository: Repository<SetOnExamination>,
  ) {}

  async getAll() {
    const results = await this.setOnExaminationRepository.find({
      order: {
        slNo: 'ASC',
      },
      where: {
        slNo: Not(IsNull()),
      },
    });

    const nullResults = await this.setOnExaminationRepository.find({
      order: {
        id: 'DESC',
      },
      where: {
        slNo: IsNull(),
      },
    });

    return [...results, ...nullResults];
  }

  async create(setOnEDto: SetOnExaminationDto) {
    const { ...setExDto } = setOnEDto;
    const getData = this.setOnExaminationRepository.create(setExDto);
    const saveData = await this.setOnExaminationRepository.save(getData);
    return saveData;
  }

  async update(id: number, setOnExaDto: SetOnExaminationDto) {
    try {
      console.log('service', id);
      const onExamSetupData = await this.setOnExaminationRepository.findOne({
        where: {
          id: id,
        },
      });

      if (!onExamSetupData) {
        throw new NotFoundException(`Package setup with ID ${id} not found`);
      }

      Object.assign(onExamSetupData, setOnExaDto);

      return await this.setOnExaminationRepository.save(onExamSetupData);
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
