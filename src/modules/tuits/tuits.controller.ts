import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import { query } from 'express';
import { filter } from 'rxjs';
import { TuitsService } from './tuits.service';
import { Tuit } from './tuit.entity';
import { CreateTuitDto, UpdateTuitDto } from './dto';


@Controller('tuits')
export class TuitsController {
    constructor(private readonly tuitService:TuitsService){}

    @Get()
    getTuit(@Query() filterQuery): Tuit[] {
        const {searchTerm, orderBy}= filterQuery
        return this.tuitService.getTuits()
    }
    @Get(":id")
    getTuitId(@Param('id') id:number):Tuit{
        return this.tuitService.getTuit(id)
    }

    @Post()
    createTuit(@Body() message:CreateTuitDto){
        return this.tuitService.createTuit(message)
    }
    @Patch(':id')
    updateTuit(@Param('id') id:number,@Body() tuit:UpdateTuitDto):Tuit{
        return this.tuitService.updateTuit(id,tuit)
    }
    @Delete(':id')
    deleteTuit(@Param('id') id:number){
        return this.tuitService.removeTuit(id)
    }


}
