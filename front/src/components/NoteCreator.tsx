import React, { useRef } from "react"
import { callToBackEnd } from '../utilities/callToBackEnd';

interface NoteCreatorProps {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const NoteCreator: React.FC<NoteCreatorProps> = ({ handleClick }) => {

    const inputRef = useRef<HTMLInputElement>(null)

    handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
        async function callAPI() {
            await callToBackEnd.create(inputRef.current?.value)
        }
        callAPI()
    }

    return (
        <>
        <button onClick={handleClick}>Create Note</button>
        <input ref={inputRef} />
        </>        
    )
}