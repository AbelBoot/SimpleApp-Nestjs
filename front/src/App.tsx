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

const App: React.FC<AppProps> = ({
//  inputValue
}) => {
  const [notes, setNotes] = useState<noteDTO[]>([])
  //const [currentNote, setCurrentNote] = useState<string>()
interface TextAreaProps {
}

  useEffect(() => {
    async function callingAPI() {
      const resp = await NotesAPI.getAll()
      setNotes(resp)
      //setCurrentNote(inputValue)
      //console.log("resp from getAll", resp)
      //console.log("currentNote from App", currentNote)
    }
    callingAPI()
  }, [])


  return (
    <>
    <ul>
    {notes.map(el => <li>{el.notes}</li>)}
    </ul>
    <TextArea 
      //inputValue={currentNote}
      handleClick={() => {}}
      //handleChange={e => e.target.value}
    ></TextArea>
    <ButtonDelete textButton="Delete"></ButtonDelete>
    </>
  )
}

export default App;
