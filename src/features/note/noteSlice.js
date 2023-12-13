import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const noteSlice = createSlice({
  name: "notes",
  initialState: initialState,
  reducers: {
    addNote: (state, action) => {
      state.push(action.payload);
    },
    deleteNote: (state, action) => {
        return state.filter(note => note.id !== action.payload);
    },
  },
  });
  
export default noteSlice.reducer;
export const { addNote, deleteNote} = noteSlice.actions;
export const noteSelector = (state) => state.notes;
