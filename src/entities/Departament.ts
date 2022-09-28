import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    CreateDateColumn,
    UpdateDateColumn,
    } from "typeorm";

    @Entity()
    export class Departament extends BaseEntity {
    
        @PrimaryGeneratedColumn()
        codigo: number;
    
        @Column()
        nombre: string;
    
        @Column()
        presupuesto: number;
    
        @Column({ default: true })
        active: boolean;

        @CreateDateColumn()
        createdAt: Date;

        @UpdateDateColumn()
        updatedAt: Date;
    }