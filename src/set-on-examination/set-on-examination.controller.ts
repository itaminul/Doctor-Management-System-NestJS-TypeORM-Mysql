import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { SetOnExaminationService } from './set-on-examination.service';
import { SetOnExaminationDto } from './dto/create.set.on-examination.dto';

@Controller('set-on-examination')
export class SetOnExaminationController {
  constructor(public readonly setOnExamService: SetOnExaminationService) {}
  @Get()
  async getAll() {
    return await this.setOnExamService.getAll();
  }
  @Post()
  async create(@Body() setPackDto: SetOnExaminationDto) {
    return await this.setOnExamService.create(setPackDto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() setOnExamDto: SetOnExaminationDto,
  ) {
    const updatedExamSetup = await this.setOnExamService.update(
      id,
      setOnExamDto,
    );
    if (!updatedExamSetup) {
      throw new NotFoundException(
        `On Examination setup with ID ${id} not found`,
      );
    }
    return updatedExamSetup;
  }
}
