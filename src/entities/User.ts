import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    CreateDateColumn,
    UpdateDateColumn,
    } from "typeorm";

    @Entity()
    export class User extends BaseEntity {
        @PrimaryGeneratedColumn()
        id: number;
    
        @PrimaryGeneratedColumn()
        codigo: number;
    
        @PrimaryGeneratedColumn()
        nif: number;
    
        @Column()
        nombre: string;
    
        @Column()
        apellido: string;
    
        @Column()
        apellido2: string;
    
        @PrimaryGeneratedColumn()
        codigo_departamento: number;
    
        @Column({ default: true })
        active: boolean;

        @CreateDateColumn()
        createdAt: Date;

        @UpdateDateColumn()
        updatedAt: Date;
    }