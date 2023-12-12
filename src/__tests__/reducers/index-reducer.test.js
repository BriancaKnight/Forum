import rootReducer from '../../reducers/index';
import {createStore} from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import noteListReducer from '../../reducers/note-list-reducer';

let store = createStore(rootReducer);

describe('rootReducer', () => {
    
    test('Should return default state if no action type is recognized', () => {
        expect(rootReducer({}, { type: null })).toEqual({
            mainNoteList: {},
            formVisibleOnPage: false
        });
    });

    test('Check that initial state of noteListReducers matches root reducer;', () => {
      expect(store.getState().mainNoteList).toEqual(noteListReducer(undefined, { type: null}));
    });

    test('Check that initial state of formVisibleReducer matches root reducer', () => {
        expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
    });

    test('Check that ADD_NOTE action works for noteListReducer and root reducer', () => {
      const action = {
        type: 'ADD_NOTE',
        text: 'Hi there!',
        author: 'Zuri',
        upvotes: '1000',
        downvotes: '0',
        id: 1
      }
      store.dispatch(action);
      expect(store.getState().mainNoteList).toEqual(noteListReducer(undefined, action));
    });

    test('Check that TOGGLE_FORM action works for formVisibleReducer and root reducer', () => {
        const action = {
            type: 'TOGGLE_FORM'
        }
        store.dispatch(action);
        expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
    });
});