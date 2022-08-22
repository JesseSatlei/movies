import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('movie')
export class Movie {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    name: string;

    @Column({ nullable: true })
    description: string;
}