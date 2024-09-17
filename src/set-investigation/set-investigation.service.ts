import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Set_investigations } from 'src/entitys/set_investigations';
import { Repository } from 'typeorm';
import { SetInvestigationDto } from './dto/create.set.investigation.dto';

@Injectable()
export class SetInvestigationService {
  constructor(
    @InjectRepository(Set_investigations)
    public readonly setInvestigationRepository: Repository<Set_investigations>,
  ) {}

  async getAll() {
    return await this.setInvestigationRepository.find({
      order: {
        id: 'DESC',
      },
    });
  }

  async create(setInvestigationDto: SetInvestigationDto) {
    const { ...setInvestigationData } = setInvestigationDto;
    const getData =
      this.setInvestigationRepository.create(setInvestigationData);
    const saveData = await this.setInvestigationRepository.save(getData);
    return saveData;
  }
}
