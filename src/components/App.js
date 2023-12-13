import React from 'react';
import Header from './Header';
import NoteControl from './NoteControl';
// import { store } from './app/store';
// import { Provider } from 'react-redux';
import { useSelector } from 'react-redux';
import { noteSelector } from './redux/noteSlice';

function App() {
  const notes = useSelector(noteSelector);
  return (
    <React.Fragment>
      <Header />
      <NoteControl />
    </React.Fragment>

  );

}

export default App;