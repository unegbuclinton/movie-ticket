import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface UsersState {
  filterType: string;
}

const initialState = {
  filterType: "vote-count",
} as UsersState;

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    resetState: () => initialState,
    filterBy: (state, action) => {
      state.filterType = action.payload;
    },
  },
  extraReducers: (builder) => {},
});
export const { resetState, filterBy } = filterSlice.actions;
export default filterSlice.reducer;
