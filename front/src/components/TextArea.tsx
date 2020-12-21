import React, { useRef, useState, useEffect } from "react"
import { NotesAPI } from './callAPI';
import { noteDTO } from "../noteDTO"

interface TextInputProps {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const TextArea: React.FC<TextInputProps> = ({handleChange}) => {
const inputRef = useRef<HTMLInputElement>(null)
const [notes, setNotes] = useState<noteDTO[]>([])

handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    console.log("input", typeof inputRef.current?.value)
    const temp = inputRef.current?.value
    async function callingAPI() {
        await NotesAPI.create(temp)
       console.log("sent from handleChange")
       }
       callingAPI()
}
  
    return (
        <input 
            ref={inputRef} 
            onChange={handleChange} 
            />
        
    )
}