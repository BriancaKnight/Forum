import React from 'react';
import PropTypes from 'prop-types';

function Note(props) {

  return (
    <React.Fragment>
      <h3> {props.text}{props.author}{props.upvotes}{props.downvotes}</h3>
    </React.Fragment>
  )
}

Note.propTypes = {
  text: PropTypes.string,
  author: PropTypes.string,
  upvotes: PropTypes.number,
  downvotes: PropTypes.number
}

export default Note;