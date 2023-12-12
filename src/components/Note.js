import React from 'react';
import PropTypes from 'prop-types';

function Note(props) {
  const date = new Date();
  const timestamp = date.toLocaleString('en-US', {
  month: 'numeric',
  day: 'numeric',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  hour12: true,
  });

  return (
    <React.Fragment>
      <h3> {props.text}{props.author}{props.upvotes}{props.downvotes}{timestamp}</h3>
    </React.Fragment>
  )
}

Note.propTypes = {
  text: PropTypes.string,
  author: PropTypes.string,
  upvotes: PropTypes.string,
  downvotes: PropTypes.string,
  timestamp: PropTypes.object
}

export default Note;