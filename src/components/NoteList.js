import React from 'react';
import Note from './Note';
import { useSelector, useDispatch } from "react-redux";
import { noteSelector } from '../redux/noteSlice';

function NoteList() {
  const noteList = useSelector(state => state.note);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
     {Object.values(noteList).map((note) =>
      <Note
      key={note.id}
        text={note.text}
        author={note.author}
        upvotes={note.upvotes}
        downvotes={note.downvotes}
        // timestamp={note.timestamp} 
        // id={note.id}
        onClick={() => dispatch(noteSelector)}
     />
     )}
    </React.Fragment>
  );
}

export default NoteList;