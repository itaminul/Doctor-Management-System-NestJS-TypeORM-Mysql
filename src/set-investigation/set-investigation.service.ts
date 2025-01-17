import {
  Body,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Set_investigations } from 'src/entitys/set_investigations';
import { IsNull, Not, Repository } from 'typeorm';
import { SetInvestigationDto } from './dto/create.set.investigation.dto';

@Injectable()
export class SetInvestigationService {
  constructor(
    @InjectRepository(Set_investigations)
    public readonly setInvestigationRepository: Repository<Set_investigations>,
  ) {}

  async getAll() {
    const results = await this.setInvestigationRepository.find({
      order: {
        slNo: 'ASC',
      },
      where: {
        slNo: Not(IsNull()),
      },
    });

    const nullResults = await this.setInvestigationRepository.find({
      order: {
        id: 'DESC',
      },
      where: {
        slNo: IsNull(),
      },
    });

    return [...results, ...nullResults];
  }

  async create(setInvestigationDto: SetInvestigationDto) {
    const { ...setInvestigationData } = setInvestigationDto;
    const getData =
      this.setInvestigationRepository.create(setInvestigationData);
    const saveData = await this.setInvestigationRepository.save(getData);
    return saveData;
  }

  async update(id: number, setInvestigationDto: SetInvestigationDto) {
    try {
      console.log('service', id);
      const examSetupData = await this.setInvestigationRepository.findOne({
        where: {
          id: id,
        },
      });

      if (!examSetupData) {
        throw new NotFoundException(`Exam setup with ID ${id} not found`);
      }

      Object.assign(examSetupData, setInvestigationDto);

      return await this.setInvestigationRepository.save(examSetupData);
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
