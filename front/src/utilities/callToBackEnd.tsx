import { noteDTO } from "./noteDTO"

export class callToBackEnd {
    public static async getAll(): Promise<noteDTO[]>{
        const resp = await fetch("http://localhost:3000", {
            method: "GET"
        })
        const data = await resp.json()
        return data
    }

    public static async create(notes: string | undefined): Promise<boolean | string>{
        const resp = await fetch("http://localhost:3000", {
            method: "POST", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({"notes": `${notes}`})
        })
        return resp.ok
    }

    public static async patch(id: string | undefined , notes: string | undefined ): Promise<boolean | string>{
        const resp = await fetch("http://localhost:3000", {
            method: "PATCH", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({"id": `${id}`,
            "notes": `${notes}`})
        })
        return resp.ok
    }
    
    public static async delete(id: string | undefined ): Promise<boolean | string>{
        const resp = await fetch("http://localhost:3000", {
            method: "DELETE", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({"id": `${id}`})
        })
        return resp.ok
    }
}