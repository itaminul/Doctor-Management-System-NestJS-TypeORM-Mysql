import { Test, TestingModule } from '@nestjs/testing';
import { SetPlainController } from './set-plain.controller';

describe('SetPlainController', () => {
  let controller: SetPlainController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SetPlainController],
    }).compile();

    controller = module.get<SetPlainController>(SetPlainController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
