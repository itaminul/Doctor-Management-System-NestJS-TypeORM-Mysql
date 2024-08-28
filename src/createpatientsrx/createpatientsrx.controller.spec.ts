import { Test, TestingModule } from '@nestjs/testing';
import { CreatepatientsrxController } from './createpatientsrx.controller';

describe('CreatepatientsrxController', () => {
  let controller: CreatepatientsrxController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreatepatientsrxController],
    }).compile();

    controller = module.get<CreatepatientsrxController>(CreatepatientsrxController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
