import {configureStore} from '@reduxjs/toolkit';
import noteReducer from "./noteSlice";
import formReducer from './formVisibleSlice';
import selectReducer from './selectedNoteSlice';

export const store = configureStore({
  reducer:{
    notes: noteReducer,
    formVisibility: formReducer,
    selectNote: selectReducer,
  },
});
