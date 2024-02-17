import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    upcomingMovies: null,
    popularMovies: null,
    trendingMovies: null,
    trailerVideo: null,
    trailer: null,
    movieDetail: null,
    castDetail: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTrailer: (state, action) => {
      state.trailer = action.payload;
    },
    addMovieDetail: (state, action) => {
      state.movieDetail = action.payload;
    },
    addCast: (state, action) => {
      state.castDetail = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addTrendingMovies,
  addPopularMovies,
  addTrailer,
  addMovieDetail,
  addCast,
  addUpcomingMovies,
} = moviesSlice.actions;

export default moviesSlice.reducer;
