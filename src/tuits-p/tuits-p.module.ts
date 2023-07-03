import { Module } from '@nestjs/common';
import { TuitsPService } from './tuits-p.service';
import { TuitsPController } from './tuits-p.controller';

@Module({
  controllers: [TuitsPController],
  providers: [TuitsPService]
})
export class TuitsPModule {}
