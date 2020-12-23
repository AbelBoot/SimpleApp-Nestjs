import React, { useRef } from "react"
import { callToBackEnd } from '../utilities/callToBackEnd';

interface InputUpdateProps {
    noteToUpdate?: string,
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const UpdateInput: React.FC<InputUpdateProps> = ({noteToUpdate,  handleClick}) => {

    const inputRef = useRef<HTMLInputElement>(null)

    handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
        async function callAPI() {
            await callToBackEnd.patch(noteToUpdate, inputRef.current?.value)
        }
        callAPI()
    }
    
    return (
        <>
        <input ref={inputRef} />
        <button onClick={handleClick}>Update Note</button>
        </>        
    )
}