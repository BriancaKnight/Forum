import React from 'react';
import Header from './Header';
import NoteControl from './NoteControl';
import { useSelector } from 'react-redux';
import { noteSelector } from '../redux/noteSlice';
import { formVisibilitySelector } from '../redux/formVisibleSlice';
import { selectedNoteSelector } from '../redux/selectedNoteSlice';

function App() {
  const notes = useSelector(noteSelector);
  const formVisibility = useSelector(formVisibilitySelector);
  const selectedNote = useSelector(selectedNoteSelector);

  
  return (
    <React.Fragment>
      <Header />
      <NoteControl />
    </React.Fragment>

  );

}

export default App;