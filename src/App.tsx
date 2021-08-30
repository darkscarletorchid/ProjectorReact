import React, { useEffect } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import NoteList from './components/note-list';
import NotesRepository from './core/notes.repository';
import { useState } from 'react';
import { Mode, Note} from './core/app.types';
import ViewNote from './components/view-note';
import CreateView from './components/create';
import { Typography,Box, Paper } from '@material-ui/core';

let notesRepo = new NotesRepository();

function App() {

  const [mode, setMode] = useState(Mode.None);
  const [items, setItems] = useState(notesRepo.getAll());
  const [selectedItem, setSelectedItem] = useState<Note>({} as Note);

  const cancelAction = () => {
    setMode(Mode.None);
    setSelectedItem({} as Note);
  }

  const createAction = (item: Note) => {
    setMode(Mode.None);
    notesRepo.create(item); 
    setItems([...notesRepo.getAll()]);
  }

  // const updateAction = (item: Note) => {
  //   setMode(Mode.None);
  //   notesRepo.update(item);
  //   setItems([...notesRepo.getAll()])
  // }

  const deleteAction = (id: number) => {
    notesRepo.delete(id); 
    setItems([...notesRepo.getAll()]); 
    if (selectedItem.id === id) {
      setMode(Mode.None);
    }
  }

  return (
    <Box className="App" m={3}>
      <Grid container spacing={3} alignItems="flex-start">
        <Grid item xs={6}>
            {mode === Mode.None && <Box m={2}><Typography variant='h4'>Let's create a note</Typography></Box>}
            {mode === Mode.View && <ViewNote selectedItem={selectedItem}></ViewNote>}
            {mode === Mode.Create && <CreateView onCancel={cancelAction} onCreate={createAction}></CreateView>}
        </Grid>
        <Grid item xs={6}>
          <NoteList 
            items={items} 
            onDelete={deleteAction} 
            onSelect={(id) => {setMode(Mode.View); let note = notesRepo.get(id); if (!!note) {setSelectedItem(note)}}} 
            onCreate={() => {setMode(Mode.Create);}} 
            onUpdate={(id) => {setMode(Mode.Edit); let note = notesRepo.get(id); if (!!note) {setSelectedItem(note)}}}></NoteList>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
