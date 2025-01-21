import { Test, TestingModule } from '@nestjs/testing';
import { SetPlainService } from './set-plain.service';

describe('SetPlainService', () => {
  let service: SetPlainService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SetPlainService],
    }).compile();

    service = module.get<SetPlainService>(SetPlainService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
