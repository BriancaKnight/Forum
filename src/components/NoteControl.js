import React from 'react';
import NoteList from './NoteList';
import NewNoteForm from './NewNoteForm';
// import { connect } from 'react-redux';
import { useSelector, useDispatch } from "react-redux";
// import { addNote, deleteNote } from '../redux/noteSlice';
import { toggleForm } from '../redux/formVisibleSlice';
// import { selectNote, rememberNote } from '../redux/selectedNoteSlice';
// import NoteDetail from './NoteDetail';

function NoteControl() {
  const dispatch = useDispatch();
  const formVisibility = useSelector((state) => state.formVisibility)
  const mainNoteList = useSelector((state) => state.noteList)
  // const selectedNote = useSelector((state) => state.rememberNote)

  const handleAddingNewNote = (newNote) => {
    dispatch(toggleForm());
  };

  // const handleNoteDetails = (selectedNote) => {
  //   dispatch(rememberNote(selectedNote));
  //   console.log("Remembered your note!")
  // };

  return (
    <React.Fragment>
      <button onClick={handleAddingNewNote}>Write a Note</button>
      {formVisibility && <NewNoteForm />}
      <NoteList noteList={mainNoteList} />
    </React.Fragment>
  );
}

export default NoteControl;


  // const handleEditingNewNote = (editedNote) => {
  //   const { text, author, upvotes, downvotes, id } = editedNote;
  //   dispatch(addNote(editedNote));
  //   dispatch(toggleForm());
  // };

  // const handleDeletingNote = (deletedNote) => {
  //   const { id } = deletedNote;
  //   dispatch(deleteNote(deletedNote));
  //   dispatch(toggleForm());
  // };