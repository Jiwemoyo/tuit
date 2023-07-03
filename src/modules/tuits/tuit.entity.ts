import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Tuit{
    @PrimaryGeneratedColumn()
    id:Number;

    @Column()
    message:string
}