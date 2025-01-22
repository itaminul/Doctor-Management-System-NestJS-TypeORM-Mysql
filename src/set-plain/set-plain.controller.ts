import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { SetPlainService } from './set-plain.service';
import { SetPlainDto } from './dto/create.set.plain.dto';

@Controller('set-plain')
export class SetPlainController {
  constructor(public readonly setPlainService: SetPlainService) {}
  @Get()
  async getAll() {
    return await this.setPlainService.getAll();
  }
  @Post()
  async create(@Body() setPlainDto: SetPlainDto) {
    return await this.setPlainService.create(setPlainDto);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() setPlainDto: SetPlainDto) {
    console.log('con', id);
    const updatedExamSetup = await this.setPlainService.update(id, setPlainDto);
    if (!updatedExamSetup) {
      throw new NotFoundException(`Exam setup with ID ${id} not found`);
    }
    return updatedExamSetup;
  }
}
