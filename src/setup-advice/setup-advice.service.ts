import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SetAdvice } from 'src/entitys/setAdvice';
import { Repository } from 'typeorm';
import { CreateSetupAdviceDto } from './dto/create.advice.setup.dto';

@Injectable()
export class SetupAdviceService {
   constructor(
    @InjectRepository(SetAdvice)
    public readonly setupAdviceRepository: Repository<SetAdvice>
   ){}

   async create(createSetupAdvice: CreateSetupAdviceDto) {
    try {
        const {...setupMedicine} = createSetupAdvice
        const setupAdviceData = this.setupAdviceRepository.create(setupMedicine);
        const saveData = await this.setupAdviceRepository.save(setupAdviceData);
        return saveData;
    } catch (error) {
        if(error instanceof HttpException) {
            throw error;
        }
        throw new HttpException(
            'internal server error',
            HttpStatus.INTERNAL_SERVER_ERROR
        )            
        
    }
   }
}
