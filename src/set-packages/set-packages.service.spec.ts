import { Test, TestingModule } from '@nestjs/testing';
import { SetPackagesService } from './set-packages.service';

describe('SetPackagesService', () => {
  let service: SetPackagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SetPackagesService],
    }).compile();

    service = module.get<SetPackagesService>(SetPackagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
