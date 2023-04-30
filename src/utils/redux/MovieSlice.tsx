import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface UsersState {
  nowPlaying: Array<any>;
  topRated: Array<any>;
  tvSeries: Array<any>;
  similar: Array<any>;
  rating: Array<any>;
  isLoading: boolean;
}

const apiKey = process.env.NEXT_PUBLIC_API_KEY;

export const playingMovie = createAsyncThunk(
  "home/nowMoviesPlaying",
  async () => {
    try {
      const response = await axios({
        method: "get",
        url: `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`,
      });
      return response?.data?.results;
    } catch (error) {
      return error;
    }
  }
);
export const topMovie = createAsyncThunk("home/topMovies", async () => {
  try {
    const response = await axios({
      method: "get",
      url: `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`,
    });
    return response?.data?.results;
  } catch (error) {
    console.log(error);
  }
});

export const tvMovies = createAsyncThunk("home/tvSeries", async () => {
  try {
    const response = await axios({
      method: "get",
      url: `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`,
    });
    return response?.data?.results;
  } catch (error) {
    console.log(error);
  }
});

export const searchMovie = createAsyncThunk(
  "home/moviesPlaying",
  async (search: string) => {
    try {
      const response = await axios({
        method: "get",
        url: `
      https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${search}&page=1&include_adult=false`,
      });
      return response?.data?.results;
    } catch (error) {
      console.log(error);
    }
  }
);
export const similarMovies = createAsyncThunk(
  "home/similarMovies",
  async (id: number) => {
    try {
      const response = await axios({
        method: "get",
        url: `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${apiKey}&language=en-US&page=1`,
      });
      return response?.data?.results;
    } catch (error) {
      console.log(error);
    }
  }
);
const initialState = {
  nowPlaying: [],
  tvSeries: [],
  topRated: [],
  similar: [],
  rating: [],
  isLoading: false,
} as UsersState;

export const movieSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    resetState: () => initialState,
    filterMovie: (state, action) => {
      state.rating = state.nowPlaying.filter((movie) => {
        return movie.vote_average >= action.payload;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(playingMovie.fulfilled, (state, action) => {
      state.nowPlaying = action.payload;
      state.isLoading = false;
    });
    builder.addCase(playingMovie.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(playingMovie.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(searchMovie.fulfilled, (state, action) => {
      state.nowPlaying = action.payload;
      state.isLoading = false;
    });
    builder.addCase(topMovie.fulfilled, (state, action) => {
      state.topRated = action.payload;
      state.isLoading = false;
    });
    builder.addCase(topMovie.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(topMovie.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(tvMovies.fulfilled, (state, action) => {
      state.tvSeries = action.payload;
      state.isLoading = false;
    });
    builder.addCase(tvMovies.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(tvMovies.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(similarMovies.fulfilled, (state, action) => {
      state.similar = action.payload;
      state.isLoading = false;
    });
    builder.addCase(similarMovies.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(similarMovies.pending, (state) => {
      state.isLoading = true;
    });
  },
});
export const { resetState, filterMovie } = movieSlice.actions;
export default movieSlice.reducer;
