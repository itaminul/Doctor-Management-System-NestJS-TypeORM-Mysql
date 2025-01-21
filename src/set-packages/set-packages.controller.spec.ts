import { Test, TestingModule } from '@nestjs/testing';
import { SetPackagesController } from './set-packages.controller';

describe('SetPackagesController', () => {
  let controller: SetPackagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SetPackagesController],
    }).compile();

    controller = module.get<SetPackagesController>(SetPackagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
