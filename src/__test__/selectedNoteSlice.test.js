import selectReducer, { selectNote, rememberNote } from '../redux/selectedNoteSlice';

describe('selectReducer', () => {

test('Should return default state if there is no action type passed into the reducer', () => {
  expect(selectReducer({}, { type: null })).toEqual({});
});

test('Should toggle selectedNote state to true', () => {
  const initialState = {text: 'Hi there!', author: 'Zuri G', upvotes: '1', downvotes: '1', id: 1, selected: false}
  const updatedState = {text: 'Hi there!', author: 'Zuri G', upvotes: '1', downvotes: '1', id: 1, selected: true}
  expect(selectReducer(initialState, selectNote())).toEqual(updatedState);
});

test('Should return properties of the selected note', () => {
    const initialState = {text: 'Hi there!', author: 'Zuri G', upvotes: '1', downvotes: '1', id: 1, selected: false};
    const updatedState = selectReducer(initialState, rememberNote())
    expect(updatedState).toEqual({text: 'Hi there!', author: 'Zuri G', upvotes: '1', downvotes: '1', id: 1, selected: false})
});
});




