import { Test, TestingModule } from '@nestjs/testing';
import { SetupAdviceController } from './setup-advice.controller';

describe('SetupAdviceController', () => {
  let controller: SetupAdviceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SetupAdviceController],
    }).compile();

    controller = module.get<SetupAdviceController>(SetupAdviceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
