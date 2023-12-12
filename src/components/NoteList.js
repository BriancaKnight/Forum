import React from 'react';
import Note from './Note';
// import PropTypes from 'prop-types';

function NoteList(props) {

  return (
    <React.Fragment>
      <Note
        text="Hi there!"
        author="Zuri"
        upvotes="1000"
        downvotes="0" />
    </React.Fragment>
  );
}

export default NoteList;