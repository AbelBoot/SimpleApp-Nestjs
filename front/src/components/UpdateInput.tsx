import React, { useRef } from "react"
import { callToBackEnd } from '../utilities/callToBackEnd';
import { Button } from "../style/SmallStyledComponents"
import { Input } from "../style/SmallStyledComponents"

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
        <Input ref={inputRef} />
        <Button onClick={handleClick}>Update Note</Button>
        </>        
    )
}