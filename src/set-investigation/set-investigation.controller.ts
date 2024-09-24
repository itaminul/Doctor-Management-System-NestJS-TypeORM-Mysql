import { Body, Controller, Get, Post } from '@nestjs/common';
import { SetInvestigationService } from './set-investigation.service';
import { SetInvestigationDto } from './dto/create.set.investigation.dto';

@Controller('set-investigation')
export class SetInvestigationController {
  constructor(public readonly setInventoryService: SetInvestigationService) {}
  @Get()
  async getAll() {
    return await this.setInventoryService.getAll();
  }
  @Post()
  async create(@Body() setInvestigationDto: SetInvestigationDto) {
    return await this.setInventoryService.create(setInvestigationDto);
  }
}
