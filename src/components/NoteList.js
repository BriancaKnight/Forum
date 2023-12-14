import React from 'react';
import Note from './Note';
import { useSelector, useDispatch } from "react-redux";
import { noteSelector } from '../redux/noteSlice';

function NoteList() {
  const noteList = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <h1> Note List </h1>
      <ul>
     {noteList.map((noteList) => (
      <li key={noteList.id}>
        Note:{noteList.text} 
        <br/>
        By: {noteList.author}
        <br/>
        <em>{noteList.upvotes} upvotes & {noteList.downvotes} downvotes</em>
        {/* // timestamp={note.timestamp}  */}
        </li>
     ))}
     </ul>
    </React.Fragment>
  );
}

export default NoteList;