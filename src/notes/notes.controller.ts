import { Body, Controller, Get, Post } from "@nestjs/common"
import { NotesService } from "./notes.service"
import { noteDTO } from "./notes.dto"

@Controller()
export class NotesController {
    constructor(noteService: NotesService){}

    @Get()
    getAllNotes(
        @Body() noteText: noteDTO){}
    @Post()
    createNotes(){}
}