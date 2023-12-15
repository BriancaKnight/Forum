import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { rememberNote, selectNote } from '../redux/selectedNoteSlice';
import NoteDetail from './NoteDetail';

function NoteList() {
  const noteList = useSelector((state) => state.notes);
  const selectedNote = useSelector((state) => state.selectNote);
  const dispatch = useDispatch();

  const handleSelectingNote = (note) => {
    console.log("note recieved")
    dispatch(selectNote(note));
    dispatch(rememberNote(note));
  }

  return (
    <React.Fragment>
      <h1> Note List </h1>
      <ul>
        {noteList.map((note) => (
          <li key={note.id} onClick={() => handleSelectingNote(note)}>
            Note:{note.text}
            <br />
            By: {note.author}
            <br />
            <em>{note.upvotes} upvotes & {note.downvotes} downvotes</em>
            {/* // timestamp={note.timestamp}  */}
          </li>
        ))}
      </ul>
      {selectedNote && <NoteDetail />}
    </React.Fragment>
  );
}
 
export default NoteList;