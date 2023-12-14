import React from 'react';
import { useSelector} from 'react-redux';

function Note() {
  const note = useSelector(state => state.note);

  return (
    <React.Fragment>
      <h3> {note.text}{note.author}{note.upvotes}{note.downvotes}</h3>
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