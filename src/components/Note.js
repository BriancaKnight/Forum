import React from 'react';
import { useSelector} from 'react-redux';
// import { noteSelector } from '../redux/noteSlice';

function Note() {
  const notes = useSelector((state) => state.notes);
  // const notes = useSelector(noteSelector);

  return (
    <React.Fragment>
      <h3> {notes.text}{notes.author}{notes.upvotes}{notes.downvotes}</h3>
    </React.Fragment>
  )
}

export default Note;

// const date = new Date();
// const timestamp = date.toLocaleString('en-US', {
// month: 'numeric',
// day: 'numeric',
// year: 'numeric',
// hour: 'numeric',
// minute: 'numeric',
// hour12: true,
// });