import { Body, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Complains } from 'src/entitys/complains';
import { Repository } from 'typeorm';
import { CreateComplainDTO } from './dto/create.complain.dto';

@Injectable()
export class ComplainService {
  constructor(
    @InjectRepository(Complains)
    public readonly complainRepository: Repository<Complains>,
  ) {}

  async getAll() {
    try {
      const results = await this.complainRepository.find({
        order: {
          id: 'DESC',
        },
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

  async create(@Body() createComplainDto: CreateComplainDTO) {
    try {
      const { ...complains } = createComplainDto;
      const data = this.complainRepository.create(complains);
      const results = await this.complainRepository.save(data);
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
}
