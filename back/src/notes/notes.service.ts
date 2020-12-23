import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm"
import { noteDTO } from "./notes.dto"
import { NotesEntity } from "./notes.entity"

@Injectable()
export class NotesService{
    constructor(@InjectRepository(NotesEntity) private notesRepository: Repository<NotesEntity>){}
    
    getAllNotes(): Promise<NotesEntity[]>{
        return this.notesRepository.find()
    }
    
    createNote(text: noteDTO){
        const note = this.notesRepository.create(text)
        this.notesRepository.save(note)
        return note
    }
    
    patchNote(updatedNote: string): Promise<NotesEntity[]>{
        let newDTO = new noteDTO()
        newDTO.id = updatedNote["id"]
        newDTO.notes = updatedNote["notes"]
        this.notesRepository.save(newDTO)
        return null
    }
    
    deleteNote(id: string): Promise<NotesEntity[]>{
        this.notesRepository.delete(id)
        return null
    }
}
