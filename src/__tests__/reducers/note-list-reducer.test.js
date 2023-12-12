import noteListReducer from '../../reducers/note-list-reducer';

describe('noteListReducer', () => {
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(noteListReducer({}, { type: null })).toEqual({});
  });
});