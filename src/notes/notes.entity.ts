import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class NotesEntity {
    @PrimaryGeneratedColumn("uuid") id: string
    @CreateDateColumn() created: Date
    @Column("text") text: string
}