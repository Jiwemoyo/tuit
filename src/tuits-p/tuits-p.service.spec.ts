import { Test, TestingModule } from '@nestjs/testing';
import { TuitsPService } from './tuits-p.service';

describe('TuitsPService', () => {
  let service: TuitsPService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TuitsPService],
    }).compile();

    service = module.get<TuitsPService>(TuitsPService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
