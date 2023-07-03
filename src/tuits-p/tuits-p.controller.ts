import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TuitsPService } from './tuits-p.service';
import { CreateTuitsPDto } from './dto/create-tuits-p.dto';
import { UpdateTuitsPDto } from './dto/update-tuits-p.dto';

@Controller('tuits-p')
export class TuitsPController {
  constructor(private readonly tuitsPService: TuitsPService) {}

  @Post()
  create(@Body() createTuitsPDto: CreateTuitsPDto) {
    return this.tuitsPService.create(createTuitsPDto);
  }

  @Get()
  findAll() {
    return this.tuitsPService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tuitsPService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTuitsPDto: UpdateTuitsPDto) {
    return this.tuitsPService.update(+id, updateTuitsPDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tuitsPService.remove(+id);
  }
}
