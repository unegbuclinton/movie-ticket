import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiKey = process.env.NEXT_PUBLIC_API_KEY;

interface UsersState {
  singleMovie: any;
  isLoading: boolean;
}
const initialState = {
  isLoading: false,
  singleMovie: [],
} as UsersState;

export const getMovieById = createAsyncThunk(
  "movie/getMovieById",
  async (id: number) => {
    try {
      const response = await axios({
        method: "get",
        url: `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`,
      });
      return response?.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const getTvSeriesById = createAsyncThunk(
  "movie/getTvSeriesById",
  async (id: number) => {
    try {
      const response = await axios({
        method: "get",
        url: `https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=en-US`,
      });
      return response?.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const singleMovieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMovieById.fulfilled, (state, action) => {
      state.singleMovie = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getTvSeriesById.fulfilled, (state, action) => {
      state.singleMovie = action.payload;
      state.isLoading = false;
    });
  },
});

export default singleMovieSlice.reducer;
