import { Body, Controller, Get, Post, Patch, Delete } from "@nestjs/common"
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

    @Patch()
    patchNote(
        @Body() id: string,
        @Body() notes: string
        ): Promise<NotesEntity[]>{
         console.log("updated text from controller", id)
         console.log("updated id from controller", notes)
         return this.notesService.patchNote(id, notes)
    }

    @Delete()
    deleteNote(
        @Body() id: string
        ): Promise<NotesEntity[]>{
         console.log("delete from controller", id)
         return this.notesService.deleteNote(id)
    }
}