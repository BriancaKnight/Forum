import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const formVisibleSlice = createSlice ({
    name: 'formVisibility',
    initialState: false,
    reducers: {
        toggleForm: state => !state,
        },
});


export default formVisibleSlice.reducer;
export const { toggleForm } = formVisibleSlice.actions;
export const formVisibilitySelector = (state) => state.formVisibility;
