import React, { useRef, useState, useEffect } from "react"
import { NotesAPI } from './callAPI';
import { noteDTO } from "../noteDTO"

interface TextInputProps {
    //inputValue?: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const TextArea: React.FC<TextInputProps> = ({handleChange, handleClick}) => {
const inputRef = useRef<HTMLInputElement>(null)
const [notes, setNotes] = useState<noteDTO[]>([])

handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    async function callingAPI() {
        await NotesAPI.create(inputRef.current?.value)
       console.log("sent from handleChange")
       }
    callingAPI()
}

handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    // async function callingAPI() {
    //     await NotesAPI.getAll()
    //    console.log("sent from handleChange")
    //    //setNotes(resp)
    //    }
    //    callingAPI()
}
    return (
        <div>
        <button 
        onClick={handleClick}
        >Create Note</button>
        <input 
            onChange={handleChange}
            ref={inputRef} 
            />
        </div>        
        
    )
}