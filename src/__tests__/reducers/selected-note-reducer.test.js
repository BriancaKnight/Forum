import selectedNoteReducer from '../../reducers/selected-note-reducer';

describe('selectedNoteReducer', () => {

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

  test('Should return default state if no action type is recognized', () => {
    expect(selectedNoteReducer({}, { type: null })).toEqual({});
  });

  test('Should select a note and return its value', () => {
    action = {
      type: 'SELECT_NOTE',
      id: 2
    };
    expect(selectedNoteReducer(currentState, action)).toEqual({
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

