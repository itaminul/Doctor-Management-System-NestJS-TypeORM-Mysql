import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { SetupAdviceService } from './setup-advice.service';
import { CreateSetupAdviceDto } from './dto/create.advice.setup.dto';

@Controller('setup-advice')
export class SetupAdviceController {
  constructor(public readonly setupAdvice: SetupAdviceService) {}

  @Get()
  async getAll(@Body() createAdviceSetup: CreateSetupAdviceDto) {
    return await this.setupAdvice.getAll();
  }

  @Post()
  async create(@Body() createAdviceSetup: CreateSetupAdviceDto) {
    return await this.setupAdvice.create(createAdviceSetup);
  }
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() createSetupAdviceDto: CreateSetupAdviceDto,
  ) {
    const updatedExamSetup = await this.setupAdvice.update(
      id,
      createSetupAdviceDto,
    );
    if (!updatedExamSetup) {
      throw new NotFoundException(`Exam setup with ID ${id} not found`);
    }
    return updatedExamSetup;
  }
}
