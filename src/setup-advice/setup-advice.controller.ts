import { Body, Controller, Post } from '@nestjs/common';
import { SetupAdviceService } from './setup-advice.service';
import { CreateSetupAdviceDto } from './dto/create.advice.setup.dto';

@Controller('setup-advice')
export class SetupAdviceController {
  constructor(public readonly setupAdvice: SetupAdviceService) {}

  @Post()
  async create(@Body() createAdviceSetup: CreateSetupAdviceDto) {
    return await this.setupAdvice.create(createAdviceSetup);
  }
}
