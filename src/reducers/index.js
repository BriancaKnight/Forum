import formVisibleReducer from './form-visible-reducer';
import { combineReducers } from 'redux';
import rootReducer from './reducers/index';

const store = createStore(rootReducer);

const rootReducer = combineReducers({
    formVisibleOnPage: formVisibleReducer,
    mainNoteList: noteListReducer

});

export default rootReducer;