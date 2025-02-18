import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: {
    name: "",
  },
};

const slice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      console.log(action);
      state.filters.name = action.payload;
      console.log(state);
    },
  },
});

export const filterReducer = slice.reducer;
export const { changeFilter } = slice.actions;
