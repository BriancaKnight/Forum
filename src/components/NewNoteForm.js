import React from 'react';
import ReusableForm from './ReusableForm';
import { v4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addNote } from "../redux/noteSlice";


export default function NewNoteForm() {
const dispatch = useDispatch();

 const handleNewFormSubmission = (e) => {
    e.preventDefault();
    const newNote = {
      text: e.target.text.value,
      author: e.target.author.value,
      upvote: parseInt(0),
      downvote: parseInt(0),
      timestamp: e.target.timestamp.value,
      id: v4()
    }
  dispatch(addNote(newNote));
  };
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewFormSubmission} />
      <h3>This is a new note form</h3>
    </React.Fragment>
  );
}
