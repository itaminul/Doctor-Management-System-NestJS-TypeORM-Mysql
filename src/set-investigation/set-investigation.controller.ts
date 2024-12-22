import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
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

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() setInvestigationDto: SetInvestigationDto,
  ) {
    console.log("con", id)
    const updatedExamSetup = await this.setInventoryService.update(
      id,
      setInvestigationDto,
    );
    if (!updatedExamSetup) {
      throw new NotFoundException(`Exam setup with ID ${id} not found`);
    }
    return updatedExamSetup;
  }
}
