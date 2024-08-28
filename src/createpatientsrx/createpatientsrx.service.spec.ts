import { Test, TestingModule } from '@nestjs/testing';
import { CreatepatientsrxService } from './createpatientsrx.service';

describe('CreatepatientsrxService', () => {
  let service: CreatepatientsrxService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreatepatientsrxService],
    }).compile();

    service = module.get<CreatepatientsrxService>(CreatepatientsrxService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
