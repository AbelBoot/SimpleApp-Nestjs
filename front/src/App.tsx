import React from 'react';
import { NotesAPI } from './components/callAPI';
import { useState, useEffect } from "react"
import { noteDTO } from "./noteDTO"
import {  TextArea } from "./components/TextArea"


const App: React.FC = () => {
  const [notes, setNotes] = useState<noteDTO[]>([])
  
  useEffect(() => {
    async function callingAPI() {
      const resp = await NotesAPI.getAll()
      setNotes(resp)
    }
    callingAPI()
  }, [])
  // useEffect(() => {
  //   async function create() {
  //     const resp = await NotesAPI.create()
  //     console.log("resppp", resp)
  //     setNotes(resp)
  //   }
  //   create()
  // }, [])
  return (
    <>
    <ul>
    {notes.map(el => <li>{el.notes}</li>)}
    </ul>
    <TextArea handleChange={ e => {
      console.log("e.target.value", e.target.value)}}></TextArea>
    </>
  )
}

export default App;
