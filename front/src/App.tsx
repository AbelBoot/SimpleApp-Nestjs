import React from 'react';
import { NotesAPI } from './components/callAPI';
import { useState, useEffect } from "react"
import { noteDTO } from "./noteDTO"

function App() {
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
    {notes.map(el => <li>{el.notes}</li>)}
    </ul>
    </>
  )
}

export default App;
