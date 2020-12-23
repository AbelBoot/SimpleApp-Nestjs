import React from 'react';
import { NotesAPI } from './components/callAPI';
import { useState, useEffect } from "react"
import { SetStateAction } from 'react';
import { noteDTO } from "./noteDTO"
import {  TextArea } from "./components/TextArea"
import { ButtonDelete } from "./components/ButtonDelete"

interface AppProps {
  //currentNote?: noteDTO[];
  //setCurrentNote?: React.Dispatch<SetStateAction<number[]>>;
  //inputValue?: string
}

const App: React.FC<AppProps> = ({}) => {
  const [notes, setNotes] = useState<noteDTO[]>([])

  useEffect(() => {
    async function callingAPI() {
      const resp = await NotesAPI.getAll()
      setNotes(resp)
    }
    callingAPI()
  }, [])

  return (
    <>
    <ul>
    {notes.map(note => {
    return (
      <div>
      <li>{note.notes}</li>
      <li>{note.created}</li>
      <ButtonDelete 
        noteToDelete={note.id}
        handleClick={() => {}}
        handleClickToPatch={() => {}}
        />
      </div>
    )
    })}
    </ul>
    <TextArea 
      handleClick={() => {}}
      handleChange={() => {}}
    ></TextArea>
    </>
  )
}

export default App;
