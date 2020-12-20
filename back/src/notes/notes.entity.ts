import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("notes")
export class NotesEntity {
    @PrimaryGeneratedColumn("uuid") id: string
    @CreateDateColumn() created: Date
    @Column("text") notes?: string
}