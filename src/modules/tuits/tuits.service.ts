import { Injectable, NotFoundException } from '@nestjs/common';
import { Tuit } from './tuit.entity';
import { CreateTuitDto, UpdateTuitDto } from './dto';

@Injectable()
export class TuitsService {
    private tuits: Tuit[] = [
        {
            id: 1,
            message: "Hola amigos trogloditas"
        }
    ];

    getTuits(): Tuit[] {
        return this.tuits;
    }

    getTuit(id: number): Tuit | undefined {
        const tuit = this.tuits.find(tuit => tuit.id === id);

        if (!tuit) {
            throw new NotFoundException("Recurso no encontrado")
        }

        return tuit
    }

    createTuit({message}: CreateTuitDto): void {
        const newTuit: Tuit = {
            id: Math.floor(Math.random() * 2000) + 1,
            message,
        };
        this.tuits.push(newTuit);
    }

    updateTuit(id: number, {message}: UpdateTuitDto): Tuit | undefined {
        const tuit: Tuit | undefined = this.getTuit(id);
        if (tuit) {
            tuit.message = message;
        }
        return tuit;
    }

    removeTuit(id: number): void {
        const index = this.tuits.findIndex(tuit => tuit.id === id);
        if (index >= 0) {
            this.tuits.splice(index, 1);
        }
    }
}
