import noteReducer, { addNote, deleteNote } from '../redux/noteSlice';

describe('noteReducer', () => {

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(noteReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new note data to mainNoteList', () => {
    const initialState = [];
    const updatedState = noteReducer(initialState, addNote({
      text: 'Hi there!', author: 'Zuri G', upvotes: '1', downvotes: '1', id: 1
    }));
    expect(updatedState).toEqual([{
      text: 'Hi there!', author: 'Zuri G', upvotes: '1', downvotes: '1', id: 1
    }]);
  });
  test('Should successfully delete a note from mainNoteList', () => {
    const initialState = [
      {text: 'Hi there!', author: 'Zuri G', upvotes: '1', downvotes: '1', id: 1},
      {text: 'Howdy!', author: 'Brianca K', upvotes: '2', downvotes: '3', id: 2}
    ];
    const updatedState = noteReducer(initialState, deleteNote(1));
    expect(updatedState).toEqual([
      {text: 'Howdy!', author: 'Brianca K', upvotes: '2', downvotes: '3', id: 2}
    ]);
});
});
