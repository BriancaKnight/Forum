import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNote, deleteNote } from '../redux/noteSlice';
import { toggleForm } from '../redux/formVisibleSlice';
import { selectNote } from '../redux/selectedNoteSlice';


function NoteDetail(){
  const dispatch = useDispatch();
  const note = useSelector(state => state.note);

  const handleEditingNote = (editedNote) => {
  const { text, author, upvotes, downvotes, id } = editedNote;
  dispatch(selectNote(editedNote));
  dispatch(addNote(editedNote));
  dispatch(toggleForm());
  };

  const handleDeletingNote = (deletedNote) => {
    const { id } = deletedNote;
    dispatch(selectNote(deleteNote));
    dispatch(deleteNote(deletedNote));
    dispatch(toggleForm());
  };
  
  return (
    <React.Fragment>
      <h2>Note Details</h2>
      <p>{note.text}</p>
      {/* <p><em>{note.timestamp}</em></p> */}
      <p> {note.upvote}{note.downvote}</p>
      <button onClick={handleEditingNote}>Edit Note</button>
      <button onClick={handleDeletingNote}>Delete this Note</button>
    </React.Fragment>
  )
}

export default NoteDetail;

