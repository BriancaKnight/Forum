import selectedNoteReducer from '../../reducers/selected-note-reducer';

describe('selectedNoteReducer', () => {

  test('Should return default state if no action type is recognized', () => {
    expect(selectedNoteReducer({}, {type: null})).toEqual({});
  });
});

