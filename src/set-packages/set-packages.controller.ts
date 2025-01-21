import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { SetPackagesService } from './set-packages.service';
import { SetPackagesDto } from './dto/create.set.packages.dto';

@Controller('set-packages')
export class SetPackagesController {
  constructor(public readonly setPackageService: SetPackagesService) {}
  @Get()
  async getAll() {
    return await this.setPackageService.getAll();
  }
  @Post()
  async create(@Body() setPackDto: SetPackagesDto) {
    return await this.setPackageService.create(setPackDto);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() setPlainDto: SetPackagesDto) {
    const updatedExamSetup = await this.setPackageService.update(
      id,
      setPlainDto,
    );
    if (!updatedExamSetup) {
      throw new NotFoundException(`Package setup with ID ${id} not found`);
    }
    return updatedExamSetup;
  }
}
