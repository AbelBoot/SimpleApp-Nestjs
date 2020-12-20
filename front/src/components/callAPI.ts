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
}