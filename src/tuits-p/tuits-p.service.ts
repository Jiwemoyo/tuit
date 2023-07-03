import { Injectable } from '@nestjs/common';
import { CreateTuitsPDto } from './dto/create-tuits-p.dto';
import { UpdateTuitsPDto } from './dto/update-tuits-p.dto';

@Injectable()
export class TuitsPService {
  private tuits: any[] = [
    {
      id: 1, // Agrega un id al tuit
      title: 'Holocausto',
      content: 'Te quieroAny'
    }
  ]; // Variable para almacenar los tuits creados

  create(createTuitsPDto: CreateTuitsPDto) {
    const { title, content } = createTuitsPDto;

    const newTuit = {
      id: this.tuits.length + 1, // Asigna un nuevo id al tuit
      title,
      content,
    };

    this.tuits.push(newTuit); // Agregar el nuevo tuit al arreglo de tuits

    return newTuit; // Devolver el tuit creado en lugar del mensaje original
  }

  findAll() {
    return this.tuits; // Devolver todos los tuits creados
  }

  findOne(id: number) {
    const tuit = this.tuits.find((tuit) => tuit.id === id);
    return tuit ? tuit : `No se encontró el tuit con el id ${id}`;
  }

  update(id: number, updateTuitsPDto: UpdateTuitsPDto) {
    const tuitIndex = this.tuits.findIndex((tuit) => tuit.id === id);

    if (tuitIndex === -1) {
      return `No se encontró el tuit con el id ${id}`;
    }

    const updatedTuit = {
      ...this.tuits[tuitIndex],
      ...updateTuitsPDto,
    };

    this.tuits[tuitIndex] = updatedTuit;

    return updatedTuit;
  }

  remove(id: number) {
    const tuitIndex = this.tuits.findIndex((tuit) => tuit.id === id);

    if (tuitIndex === -1) {
      return `No se encontró el tuit con el id ${id}`;
    }

    const removedTuit = this.tuits.splice(tuitIndex, 1);

    return removedTuit[0];
  }

}
