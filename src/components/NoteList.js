import React from 'react';
import Note from './Note';
import PropTypes from 'prop-types';

function NoteList(props) {

  return (
    <React.Fragment>
     {Object.values(props.noteList).map((note) =>
      <Note
      whenNoteClicked = {props.onNoteSelection}
        text={note.text}
        author={note.author}
        upvotes={note.upvotes}
        downvotes={note.downvotes}
        timestamp={note.timestamp} 
        id={note.id}
        key={note.id}/>
     )}
    </React.Fragment>
  );
}

NoteList.propTypes = {
 noteList: PropTypes.object,
 onNoteSelection: PropTypes.func
};

export default NoteList;