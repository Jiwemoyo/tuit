import { PartialType } from '@nestjs/mapped-types';
import { CreateTuitsPDto } from './create-tuits-p.dto';

export class UpdateTuitsPDto extends PartialType(CreateTuitsPDto) {}
