import React, { useRef, useState, useEffect } from "react"
import { NotesAPI } from './callAPI';
import { noteDTO } from "../noteDTO"

interface TextInputProps {
    //inputValue?: string,
    //handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const TextArea: React.FC<TextInputProps> = ({
    //inputValue,
     handleClick}) => {
const inputRef = useRef<HTMLInputElement>(null)
const [notes, setNotes] = useState<noteDTO[]>([])

handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    //const temp = inputRef.current?.value
    //inputValue = inputRef.current?.value
    //console.log("input value text", inputValue)
    async function callingAPI() {
        await NotesAPI.create(inputRef.current?.value)
       console.log("sent from handleChange")
       }
       callingAPI()
}
  
    return (
        <div>
        <button onClick={handleClick}>Create Note</button>
        <input 
            ref={inputRef} 
            />
        </div>        
        
    )
}