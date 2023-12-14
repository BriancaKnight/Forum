import React from 'react';
import Note from './Note';
import { useSelector, useDispatch } from "react-redux";
import { noteSelector } from '../redux/noteSlice';

function NoteList() {
  const noteList = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
     {noteList.map((noteList) =>
      <Note
      key={noteList.id}
        text={noteList.text}
        author={noteList.author}
        upvotes={noteList.upvotes}
        downvotes={noteList.downvotes}
        // timestamp={note.timestamp} 
        id={noteList.id}
        onClick={() => dispatch(noteSelector)}
     />
     )}
    </React.Fragment>
  );
}

export default NoteList;