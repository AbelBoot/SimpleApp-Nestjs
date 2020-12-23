import React from "react"
import { NotesAPI } from './callAPI';

interface ButtonProps {
    noteToDelete?: string,
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
    handleClickToPatch: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const  ButtonDelete: React.FC<ButtonProps> = ({
    noteToDelete,
    handleClick,
    handleClickToPatch
    }) => {
    
    handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
        async function callingAPI() {
        await NotesAPI.delete(noteToDelete)
       }
    callingAPI()
    }
    //patch is sending OK I think
    // not ok in the back end, cannot find id
    handleClickToPatch = (event: React.MouseEvent<HTMLButtonElement>): void => {
        async function callingAPI() {
        await NotesAPI.patch(noteToDelete, "test to update")
       }
    callingAPI()
    }
    
    return (
        <div>
        <button 
        onClick={handleClick}
        >Delete Note</button>
        <button 
        onClick={handleClickToPatch}
        >Patch Note</button>
        </div>
    )
}