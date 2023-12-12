import React from 'react';

function NoteDetail(props){
  const {note} = props;

  return (
    <React.Fragment>
      <h2>Note Details</h2>
      <p>{note.text}</p>
      <p><em>{note.timestamp}</em> {note.upvote}{note.downvote}</p>
    </React.Fragment>
  )
}