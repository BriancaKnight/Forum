import React from 'react';
import NewNoteForm from './NewNoteForm';
import NoteList from './NoteList';

class NoteControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <NoteList />
        </React.Fragment>
    );
  }
}

export default NoteControl;