import React from 'react';
import NoteList from './NoteList';
// import { connect } from 'react-redux';
import { useSelector, useDispatch } from "react-redux";
import { addNote, deleteNote } from '../redux/noteSlice';
import { toggleForm } from '../redux/formVisibleSlice';
import { selectNote } from '../redux/selectedNoteSlice';

function NoteControl() {
  const dispatch = useDispatch();
  const mainNoteList = useSelector(state => state.mainNoteList)

  const handleAddingNewNote = (newNote) => {
    const { text, author, upvotes, downvotes, id } = newNote;
    dispatch(addNote(newNote));
    dispatch(toggleForm());
  };

  const handleChangingSelectedNote = (selectedNote) => {
    const { text, author, upvotes, downvotes, id } = selectedNote;
    dispatch(selectNote(selectedNote));
  };

  return (
    <React.Fragment>
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