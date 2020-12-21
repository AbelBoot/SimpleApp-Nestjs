import { Http2ServerResponse } from "http2"
import { noteDTO } from "../noteDTO"

export class NotesAPI {
    public static async getAll(): Promise<noteDTO[]>{
        const resp = await fetch("http://localhost:3000", {
            method: "GET"
        })
        const data = await resp.json()
        return data
    }
    public static async create(stringg: string | undefined): Promise<boolean | string>{
        const resp = await fetch("http://localhost:3000", {
            method: "POST", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({"notes": `${stringg}`})
        })
        console.log("resp", resp)
        const res = resp.ok
        //const dataPost = await resp.json()
        return res
        //return dataPost
    }
}