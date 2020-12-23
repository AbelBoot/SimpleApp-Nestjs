import React from "react"
import { callToBackEnd } from '../utilities/callToBackEnd';
import { Button } from "../style/SmallStyledComponents"

interface ButtonProps {
    noteToDelete?: string,
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const  DeleteButton: React.FC<ButtonProps> = ({ noteToDelete,handleClick }) => {
    
    handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
        async function callAPI() {
            await callToBackEnd.delete(noteToDelete)
        }
        callAPI()
    }

    return (
        <>
        <Button onClick={handleClick}>Delete Note</Button>
        </>
    )
}