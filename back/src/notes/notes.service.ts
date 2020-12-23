import { Injectable } from "@nestjs/common";
import { NotesEntity } from "./notes.entity"
import { noteDTO } from "./notes.dto"
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm"


@Injectable()
export class NotesService{
    constructor(@InjectRepository(NotesEntity) private notesRepository: Repository<NotesEntity>){}
    getAllNotes(): Promise<NotesEntity[]>{
        return this.notesRepository.find()
    }
    createNote(text: noteDTO){
        console.log("text from services", text)
        const note = this.notesRepository.create(text)
        this.notesRepository.save(note)
        return note
    }
    patchNote(id: string, notes: string): Promise<NotesEntity[]>{
        console.log("patch note from service", notes)
        //I cannot find the note by the id!!
        console.log("note entity", this.notesRepository.find())

        return null
    }
    deleteNote(id: string): Promise<NotesEntity[]>{
        console.log("deleting from back", id)
        this.notesRepository.delete(id)
        return null
    }
}
