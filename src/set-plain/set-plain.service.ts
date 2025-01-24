import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SetPlain } from 'src/entitys/setPlan';
import { IsNull, Not, Repository } from 'typeorm';
import { SetPlainDto } from './dto/create.set.plain.dto';

@Injectable()
export class SetPlainService {
  constructor(
    @InjectRepository(SetPlain)
    public readonly setPlainRepository: Repository<SetPlain>,
  ) {}

  async getAll() {
    const results = await this.setPlainRepository.find({
      order: {
        slNo: 'ASC',
      },
      where: {
        slNo: Not(IsNull()),
      },
    });

    const nullResults = await this.setPlainRepository.find({
      order: {
        id: 'DESC',
      },
      where: {
        slNo: IsNull(),
      },
    });

    return [...results, ...nullResults];
  }

  async create(setPlaDto: SetPlainDto) {
    const { ...setPlainDto } = setPlaDto;
    const getData = this.setPlainRepository.create(setPlainDto);
    const saveData = await this.setPlainRepository.save(getData);
    return saveData;
  }

  async update(id: number, setPlainDto: SetPlainDto) {
    try {
      console.log('service', id);
      const examSetupData = await this.setPlainRepository.findOne({
        where: {
          id: id,
        },
      });

      if (!examSetupData) {
        throw new NotFoundException(`Exam setup with ID ${id} not found`);
      }

      Object.assign(examSetupData, setPlainDto);

      return await this.setPlainRepository.save(examSetupData);

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
