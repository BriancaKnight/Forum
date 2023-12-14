import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const formVisibleSlice = createSlice({
    name: 'formVisibility',
    initialState: initialState,
    reducers: {
        toggleForm: state => !state,
    },
});

export default formVisibleSlice.reducer;
export const { toggleForm } = formVisibleSlice.actions;
export const formVisibilitySelector = (state) => state.formVisibility;
