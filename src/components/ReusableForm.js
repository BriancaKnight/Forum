import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='text'
          placeholder='Write your note here!' />
        <input
          type='text'
          name='author'
          placeholder='Written by:' />
          <button type='submit'>Send Note</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
}

export default ReusableForm;