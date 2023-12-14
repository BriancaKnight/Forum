import { createSlice } from "@reduxjs/toolkit";

const initialState = false; 

const selectorSlice = createSlice({
  name: 'selectedNote',
  initialState: initialState,
  reducers: {
    selectNote: (state) => !state,
  },
});


export default selectorSlice.reducer;
export const { selectNote, } = selectorSlice.actions;
export const selectedNoteSelector = (state) => state.selectedNote;
