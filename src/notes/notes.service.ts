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
        const note = this.notesRepository.create(text)
        this.notesRepository.save(note)
    }
}
