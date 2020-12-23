import React from 'react'
import { useState, useEffect } from "react"
import { callToBackEnd } from './utilities/callToBackEnd'
import { noteDTO } from "./utilities/noteDTO"
import { DeleteButton } from "./components/DeleteButton"
import { NoteCreator } from "./components/NoteCreator"
import { UpdateInput } from "./components/UpdateInput"
import { Container, NoteCreatorContainer, ExistingNotesContainer, NoteContainer, SingleElementContainer } from "./style/Containers"
import { H3 } from "./style/SmallStyledComponents"
import { Input } from "./style/SmallStyledComponents"

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
    <Container>
    <H3>Simple Note-Taking App</H3>
    <ExistingNotesContainer>
    {notes.map(note => {
      return (
        <div>
        <NoteContainer>
          <SingleElementContainer>
            <Input defaultValue={note.notes}/>
          </SingleElementContainer>
          <SingleElementContainer>
            <DeleteButton
              noteToDelete={note.id}
              handleClick={() => {}}
            />
          </SingleElementContainer>
        </NoteContainer>
        <NoteContainer>
            <UpdateInput
              noteToUpdate={note.id}
              handleClick={() => {}}    
            />
        </NoteContainer>
        </div>
      )
    })}
    </ExistingNotesContainer>
    <NoteCreatorContainer>
      <NoteCreator handleClick={() => {}}/>
    </NoteCreatorContainer>
    </Container> 
    </>
  )
}

export default App;
