import React from 'react';
import NewNoteForm from './NewNoteForm';
import NoteList from './NoteList';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReusableButton from './ReusableButton';

class NoteControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // selectedNote: null,
      // editing: false
    };
  }

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

  handleAddingNewNote = (newNote) => {
    const { dispatch } = this.props;
    const { text, author, upvotes, downvotes, id } = newNote;
    const action = {
      type: 'ADD_NOTE',
      text: text,
      author: author,
      upvotes: upvotes,
      downvotes: downvotes,
      id: id
    }
    dispatch(action);
    const action2 = {
      type: 'TOGGLE_FORM'
    }
    dispatch(action2);
  }

  handleEditingNewNote = (editedNote) => {
    const { dispatch } = this.props;
    const { text, author, upvotes, downvotes, id } = editedNote;
    const action = {
      type: 'ADD_NOTE',
      text: text,
      author: author,
      upvotes: upvotes,
      downvotes: downvotes,
      id: id
    }
    dispatch(action);
    this.setState()
  }

  handleDeletingNote = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_NOTE',
      id: id
    }
    dispatch(action);
    this.setState();
  }

  handleChangingSelectedNote = (id) => {
    const selectedNote = this.props.mainNoteList[id];
    this.setState({ selectedNote: selectedNote });
  }

  render() {
    return (
      <React.Fragment>
        <NoteList noteList={this.props.mainNoteList} />
        <ReusableButton onClick={this.handleClick} buttonText="Add a Note" />
      </React.Fragment>
    );
  }
}

NoteControl.propTypes = {
  mainNoteList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    mainNoteList: state.mainNoteList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

NoteControl = connect(mapStateToProps)(NoteControl);

export default NoteControl;