import React from 'react';
import { NotesAPI } from './components/callAPI';
import { useState, useEffect } from "react"
import { noteDTO } from "./noteDTO"
import {  TextArea } from "./components/TextArea"
import { ButtonDelete } from "./components/Button"


const App: React.FC = () => {
  const [notes, setNotes] = useState<noteDTO[]>([])
  
  useEffect(() => {
    async function callingAPI() {
      const resp = await NotesAPI.getAll()
      setNotes(resp)
      console.log("resp from getAll", resp)
    }
    callingAPI()
  }, [])

  return (
    <>
    <ul>
    {notes.map(el => <li>{el.notes}</li>)}
    </ul>
    <TextArea handleChange={ e => {
      console.log("e.target.value", e.target.value)}}></TextArea>
    <ButtonDelete textButton="delete"></ButtonDelete>
    </>
  )
}

export default App;
