import { BeforeInsert, Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { hashSync } from 'bcrypt';

@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @Column()
    password: string;

    @CreateDateColumn()
    createdAt?: string;

    @UpdateDateColumn()
    updatedAt?: string;

    @DeleteDateColumn()
    deletedAt?: string;

    @BeforeInsert()
    hashPassword() {
        this.password = hashSync(this.password, 10)
    }
}
