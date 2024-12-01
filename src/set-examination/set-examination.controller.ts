import { Body, Controller, Get, Post } from '@nestjs/common';
import { SetupExaminationDto } from './dto/create.set.examination.dto';
import { SetExaminationService } from './set-examination.service';

@Controller('set-examination')
export class SetExaminationController {
  constructor(public readonly exampSetupService: SetExaminationService) {}

  @Get()
  async getAll() {
    return await this.exampSetupService.getAll();
  }

  @Post()
  async create(@Body() setupExaminationDto: SetupExaminationDto) {
    return await this.exampSetupService.create(setupExaminationDto);
  }
}
