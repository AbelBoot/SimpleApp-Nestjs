import { Body, Controller, Get, Post } from "@nestjs/common"
import { NotesService } from "./notes.service"
import { noteDTO } from "./notes.dto"
import { NotesEntity } from "./notes.entity"

@Controller()
export class NotesController {
    constructor(private notesService: NotesService){}

    @Get()
    getAllNotes(): Promise<NotesEntity[]>{
        return this.notesService.getAllNotes()
    }
    @Post()
    createNote(
        @Body() noteText: noteDTO
    ){
        this.notesService.createNote(noteText)
    }
}