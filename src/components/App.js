import React from 'react';
import Header from './Header';
import NoteControl from './NoteControl';
// import { store } from './app/store';
// import { Provider } from 'react-redux';
import { useSelector } from 'react-redux';
import { noteSelector } from './redux/noteSlice';
import { formVisibilitySelector } from '../redux/formVisibleSlice';

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