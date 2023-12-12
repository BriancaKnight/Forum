import React from 'react';
import PropTypes from 'prop-types';

function Note(props) {
  const text = "Hi there!"
  const author = "Zuri"
  const upvotes = 1000
  const downvotes = 0

  return (
    <React.Fragment>
      <h3> {text}{author}{upvotes}{downvotes}</h3>
    </React.Fragment>
  )
}

// Note.propTypes = {
//   text: PropTypes.string,
//   author: PropTypes.string,
//   upvotes: PropTypes.number,
//   downvotes: PropTypes.number
// }

export default Note;