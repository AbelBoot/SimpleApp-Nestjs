import { noteDTO } from "../noteDTO"

// export async function callAPI(): Promise<noteDTO[]>{
//     const notes = await fetch("http:localhost:3000", {method: "GET"})
        
//     //console.log("notes", notes.json())

//     //const data = await notes.json()
//             //.catch(err => console.log("err", err))
            
        
       
//     return notes    
// }

export class NotesAPI {
    public static async getAll(): Promise<noteDTO[]>{
        const resp = await fetch("http://localhost:3000", {
            method: "GET"
        })
        const data = await resp.json()
        return data
    }
    public static async create(): Promise<noteDTO[]>{
        const resp = await fetch("http://localhost:3000", {
            method: "POST", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify("sixth")
        })
        const dataPost = await resp.json()
        console.log("resp", resp)
        return dataPost
    }
}