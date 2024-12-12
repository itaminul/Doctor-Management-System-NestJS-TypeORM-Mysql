import { Body, Controller, Get, Post } from '@nestjs/common';
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
}
