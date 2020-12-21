import React, { useRef, useState, useEffect } from "react"
import { NotesAPI } from './callAPI';
import { noteDTO } from "../noteDTO"

interface TextInputProps {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}




export const TextArea: React.FC<TextInputProps> = ({handleChange}) => {
const inputRef = useRef<HTMLInputElement>(null)
const [notes, setNotes] = useState<noteDTO[]>([])
//this is called only once, how to re-render??
//ref dependency is not working
//access e????

useEffect(() => {
    async function callingAPI() {
     await NotesAPI.create()
    console.log("sentt")
    }
    callingAPI()
    //setNotes(notes)
    console.log("rer", inputRef)
}, [])

    
    return (
        <input 
            ref={inputRef} 
            onChange={handleChange} 
            />
        
    )
}