import React from 'react';
// import NewNoteForm from './NewNoteForm';
import NoteList from './NoteList';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import ReusableButton from './ReusableButton';
import { useSelector, useDispatch } from "react-redux";
import { addNote, deleteNote } from '../redux/noteSlice';
import { toggleForm } from '../redux/formVisibleSlice';
import { selectNote } from '../redux/selectedNoteSlice';

function NoteControl() {
  const dispatch = useDispatch();
  const mainNoteList = useSelector(state => state.mainNoteList)

  const handleAddingNewNote = (newNote) => {
    const { text, author, upvotes, downvotes, id } = newNote;
    dispatch(addNote(newNote));
    dispatch(toggleForm());
  };

  const handleEditingNewNote = (editedNote) => {
    const { text, author, upvotes, downvotes, id } = editedNote;
    dispatch(addNote(editedNote));
    dispatch(toggleForm());
  };

  const handleDeletingNote = (deletedNote) => {
    const { id } = deletedNote;
    dispatch(deleteNote(deletedNote));
    dispatch(toggleForm());
  };

  const handleChangingSelectedNote = (selectedNote) => {
    const { text, author, upvotes, downvotes, id } = selectedNote;
    dispatch(selectNote(selectedNote));
  };

  return (
    <React.Fragment>
      <NoteList noteList={mainNoteList} />
      <ReusableButton buttonText="Add a Note" />
    </React.Fragment>
  );
}

export default NoteControl;

// constructor(props) {
//   super(props);
//   this.state = {
// selectedNote: null,
//     // editing: false
//   };
// }

// handleClick = () => {
//   if (this.state.selectedNote != null) {
//     this.setState({
//       // selectedNote: null,
//       // editing: false
//     });
//   } else {
//     const { dispatch } = this.props;
//     const action = {
//       type: 'TOGGLE_FORM'
//     }
//     dispatch(action);
//   }
// }


// NoteControl.propTypes = {
//   mainNoteList: PropTypes.object,
//   formVisibleOnPage: PropTypes.bool
// };

// const mapStateToProps = state => {
//   return {
//     mainNoteList: state.mainNoteList,
//     formVisibleOnPage: state.formVisibleOnPage
//   }
// }

// NoteControl = connect(mapStateToProps)(NoteControl);
