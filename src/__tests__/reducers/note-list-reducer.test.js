import noteListReducer from '../../reducers/note-list-reducer';

describe('noteListReducer', () => {

  let action;
  const noteData = {
    text: 'Hi there!',
    author: 'Zuri G',
    upvotes: '1',
    downvotes: '1',
    id: 1
  };

  const currentState = {
    1: {
      text: 'Hi there!',
      author: 'Zuri G',
      upvotes: '1',
      downvotes: '1',
      id: 1
    }, 2: {
      text: 'I love cheesecake!',
      author: 'Mark Lopez',
      upvotes: '6',
      downvotes: '2',
      id: 2
    }
}

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(noteListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new note data to mainNoteList', () => {
    const { text, author, upvotes, downvotes, id } = noteData;
    action = {
      type: 'ADD_NOTE',
      text: text,
      author: author,
      upvotes: upvotes,
      downvotes: downvotes,
      id: id
    };

    expect(noteListReducer({}, action)).toEqual({
      [id] : {
        text: text,
        author: author,
        upvotes: upvotes,
        downvotes: downvotes,
        id: id
      }
    });
  });

  test('Should successful delete note data from mainNoteList', () => {
    action = {
      type: 'DELETE_NOTE',
      id: 1
    };
    expect(noteListReducer(currentState, action)).toEqual({
      2: {
        text: 'I love cheesecake!',
        author: 'Mark Lopez',
        upvotes: '6',
        downvotes: '2',
        id: 2
      }
    });
  });

});