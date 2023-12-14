import React from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../redux/noteSlice';
import {v4} from 'uuid';

function ReusableForm() {
  const dispatch = useDispatch();

  const handleFormSubmission = (e) => {
    e.preventDefault();

    const newNote = {
      text: e.target.text.value,
      author: e.target.author.value,
      upvote: parseInt(0),
      downvote: parseInt(0),
      // timestamp: e.target.timestamp.value,
      id: v4()
    }
    dispatch(addNote(newNote));
    console.log("Added New Note")
    
  }

  return (
    <React.Fragment>
      <form onSubmit={handleFormSubmission}>
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

export default ReusableForm;