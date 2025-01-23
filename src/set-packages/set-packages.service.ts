import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SetPackage } from 'src/entitys/setPackage';
import { IsNull, Not, Repository } from 'typeorm';
import { SetPackagesDto } from './dto/create.set.packages.dto';

@Injectable()
export class SetPackagesService {
    constructor(
        @InjectRepository(SetPackage)
        public readonly setPackageRepository: Repository<SetPackage>,
      ) {}
    
      async getAll() {
        const results = await this.setPackageRepository.find({
          order: {
            slNo: 'ASC',
          },
          where: {
            slNo: Not(IsNull()),
          },
        });
    
        const nullResults = await this.setPackageRepository.find({
          order: {
            id: 'DESC',
          },
          where: {
            slNo: IsNull(),
          },
        });
    
        return [...results, ...nullResults];
      }
    
      async create(setPacDto: SetPackagesDto) {
        const { ...setPlainDto } = setPacDto;
        const getData = this.setPackageRepository.create(setPlainDto);
        const saveData = await this.setPackageRepository.save(getData);
        return saveData;
      }
    
      async update(id: number, setPackDto: SetPackagesDto) {
        try {
          console.log('service', id);
          const packageSetupData = await this.setPackageRepository.findOne({
            where: {
              id: id,
            },
          });
    
          if (!packageSetupData) {
            throw new NotFoundException(`Package setup with ID ${id} not found`);
          }
    
          Object.assign(packageSetupData, setPackDto);
    
          return await this.setPackageRepository.save(packageSetupData);
    
        } catch (error) {
          if (error instanceof HttpException) {
            throw error;
          }
          throw new HttpException(
            'Internal server error',
            HttpStatus.INTERNAL_SERVER_ERROR,
          );
        }
      }
}
