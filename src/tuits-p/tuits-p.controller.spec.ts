import { Test, TestingModule } from '@nestjs/testing';
import { TuitsPController } from './tuits-p.controller';
import { TuitsPService } from './tuits-p.service';

describe('TuitsPController', () => {
  let controller: TuitsPController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TuitsPController],
      providers: [TuitsPService],
    }).compile();

    controller = module.get<TuitsPController>(TuitsPController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
