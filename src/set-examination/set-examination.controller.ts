import { Body, Controller, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SetupExaminationDto } from './dto/create.set.examination.dto';
import { SetExaminationService } from './set-examination.service';

@Controller('set-examination')
export class SetExaminationController {
    constructor(
        public readonly exampSetupService: SetExaminationService
    ){}

    @Post()
    async create(@Body() setupExaminationDto: SetupExaminationDto) {
        return await this.exampSetupService.create(setupExaminationDto);
    }
}
