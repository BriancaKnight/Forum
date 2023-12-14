import selectReducer, { selectNote } from '../redux/selectedNoteSlice';

describe('selectReducer', () => {

test('Should return default state if there is no action type passed into the reducer', () => {
  expect(selectReducer({}, { type: null })).toEqual({});
});

test('Should toggle selectedNote state to true', () => {
  expect(selectReducer(false, selectNote())).toEqual(true);
});

test('Should return properties of the selected note' () => {
    const initialState = [];
    const updatedState = noteReducer(initialState, addNote({
      text: 'Hi there!', author: 'Zuri G', upvotes: '1', downvotes: '1', id: 1
    }));
});
});




