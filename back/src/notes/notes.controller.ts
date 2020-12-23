import { Body, Controller, Get, Post, Patch, Delete } from "@nestjs/common"
import { noteDTO } from "./notes.dto"
import { NotesEntity } from "./notes.entity"
import { NotesService } from "./notes.service"

@Controller()
export class NotesController {
    constructor(private notesService: NotesService){}

    @Get()
    getAllNotes(): Promise<NotesEntity[]>{
        return this.notesService.getAllNotes()
    }
    
    @Post()
    createNote(@Body() noteText: noteDTO){
        this.notesService.createNote(noteText)
    }

    @Patch()
    patchNote(@Body() updatedNote: string): Promise<NotesEntity[]>{
         return this.notesService.patchNote(updatedNote)
    }

    @Delete()
    deleteNote(
        @Body() id: string): Promise<NotesEntity[]>{
         return this.notesService.deleteNote(id)
    }
}