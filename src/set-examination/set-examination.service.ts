import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SetExamination } from 'src/entitys/setExamination';
import { Repository } from 'typeorm';
import { SetupExaminationDto } from './dto/create.set.examination.dto';

@Injectable()
export class SetExaminationService {
    constructor(
        @InjectRepository(SetExamination)
        public readonly setExaminationRepository: Repository<SetExamination>
    ){}

    async create(createSetupExamination: SetupExaminationDto) {
        try {
            const examSetupdata = this.setExaminationRepository.create(createSetupExamination);
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
}
