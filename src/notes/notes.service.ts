import { Injectable } from "@nestjs/common";
import { noteDTO } from "./notes.dto"

@Injectable()
export class NotesService{
    constructor(){}
    getAllNotes(data): noteDTO[]: []{
        return data
    }
}
