import React from 'react'
import { useState, useEffect } from "react"
import { callToBackEnd } from './utilities/callToBackEnd'
import { noteDTO } from "./utilities/noteDTO"
import { DeleteButton } from "./components/DeleteButton"
import { NoteCreator } from "./components/NoteCreator"
import { UpdateInput } from "./components/UpdateInput"

interface AppProps {
}

const App: React.FC<AppProps> = ({}) => {
  const [notes, setNotes] = useState<noteDTO[]>([])
  useEffect(() => {
    async function callAPI() {
      const resp = await callToBackEnd.getAll()
      setNotes(resp)
    }
    callAPI()
  }, [])

  return (
    <>
    {notes.map(note => {
    return (
      <div>
          <input defaultValue={note.notes}/>
          <DeleteButton
            noteToDelete={note.id}
            handleClick={() => {}}
          />
          <UpdateInput
            noteToUpdate={note.id}
            handleClick={() => {}}    
          />
      </div>
    )
    })}
    <NoteCreator handleClick={() => {}}/>
    </>
  )
}

export default App;
