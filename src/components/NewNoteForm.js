import React from 'react';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';
import { v4 } from 'uuid';


function NewNoteForm(props) {

  function handleNewFormSubmission(event) {
    event.preventDefault();
    props.onNewNoteCreation({
      text: event.target.text.value,
      author: event.target.author.value,
      upvote: '0',
      downvote: '0',
      timestamp: event.target.timestamp.value,
      id: v4()
    })
  }


  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewFormSubmission} />
      <h3>This is a new note form</h3>
    </React.Fragment>
  );
}

NewNoteForm.propTypes = {
  onNewNoteCreation: PropTypes.func
}

export default NewNoteForm;