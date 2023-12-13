import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const selectorSlice = createSlice({
  name: 'selectedNote',
  initialState: initialState,
  reducers: {
    selectNote: (state, action) => {
      state.push(action.payload);
    },
  },
});

export default selectorSlice.reducer;
export const { selectNote } = selectorSlice.actions;
export const selectedNoteSelector = (state) => state.selectedNote;

