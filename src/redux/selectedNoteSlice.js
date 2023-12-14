import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    text: '',
    author: '',
    upvotes: 0,
    downvotes: 0,
    id: '',
    selected: false
}
const selectorSlice = createSlice({
  name: 'selectedNote',
  initialState: initialState,
  reducers: {
    selectNote: (state) => {
      state.selected = !state.selected;
    },
    rememberNote: (state, action) => {
      state = action.payload;
    }
  },
});

export default selectorSlice.reducer;
export const { selectNote, rememberNote } = selectorSlice.actions;
export const selectedNoteSelector = (state) => state.selectedNote;
