import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { ComplainService } from './complain.service';
import { CreateComplainDTO } from './dto/create.complain.dto';

@Controller('complain')
export class ComplainController {
  constructor(public readonly complainService: ComplainService) {}

  @Get()
  async getAll() {
    try {
      const results = await this.complainService.getAll();
      return {
        success: true,
        statusCode: HttpStatus.OK,
        message: 'Show successfully',
        data: results,
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      } else {
        throw new HttpException(
          'Failed to create prescription',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }

  @Post()
  async create(@Body() createComplainRxDto: CreateComplainDTO) {
    try {
      const results = await this.complainService.create(createComplainRxDto);
      return {
        success: true,
        statusCode: HttpStatus.OK,
        message: 'Createded successfully',
        data: results,
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      } else {
        throw new HttpException(
          'Failed to create',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }
}
