import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { SetupExaminationDto } from './dto/create.set.examination.dto';
import { SetExaminationService } from './set-examination.service';
import { UpdateExaminationDto } from './dto/update.set.examination.dto';

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

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateExaminationDto: UpdateExaminationDto,
  ) {
    const updatedExamSetup = await this.exampSetupService.update(
      id,
      updateExaminationDto,
    );
 
    return updatedExamSetup;
  }
}
