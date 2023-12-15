import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNote, deleteNote } from '../redux/noteSlice';
import { toggleForm } from '../redux/formVisibleSlice';
// import { rememberNote } from '../redux/selectedNoteSlice';

function NoteDetail() {
  const dispatch = useDispatch();
  const selectedNote = useSelector(state => state.selectNote);

  const handleEditingNote = () => {
    // const { text, author, upvotes, downvotes, id } = editedNote;
    // dispatch(selectNote(editedNote));
    dispatch(addNote(selectedNote));
    dispatch(toggleForm());
  };

  const handleDeletingNote = () => {
    // const { id } = selectNote;
    // dispatch(selectNote(deleteNote));
    dispatch(deleteNote(selectedNote));
    dispatch(toggleForm());
  };

  return (
    <React.Fragment>
      <h2>Note Details</h2>
      <p>{selectedNote.text}</p>
      {/* <p><em>{note.timestamp}</em></p> */}
      <p> {selectedNote.upvote}{selectedNote.downvote}</p>
      <button onClick={handleEditingNote}>Edit Note</button>
      <button onClick={handleDeletingNote}>Delete this Note</button>
    </React.Fragment>
  )
}

export default NoteDetail;

