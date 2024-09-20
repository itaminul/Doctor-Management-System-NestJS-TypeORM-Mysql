import { Test, TestingModule } from '@nestjs/testing';
import { SetupAdviceService } from './setup-advice.service';

describe('SetupAdviceService', () => {
  let service: SetupAdviceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SetupAdviceService],
    }).compile();

    service = module.get<SetupAdviceService>(SetupAdviceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
