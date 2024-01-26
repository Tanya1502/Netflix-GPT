import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    trailerVideo: null,
    trailer: null,
    movieDetail: null,
    castDetail: null
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTrailer: (state,action)=>{
      state.trailer = action.payload;
    },
    addMovieDetail:(state,action)=>{
      state.movieDetail = action.payload;
    },
    addCast:(state,action)=>{
      state.castDetail = action.payload;
  }

  },
});

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTrailer, addMovieDetail, addCast } = moviesSlice.actions;

export default moviesSlice.reducer;
