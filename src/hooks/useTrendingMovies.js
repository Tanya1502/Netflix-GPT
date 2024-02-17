import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addTrendingMovies } from '../utils/moviesSlice';

const useTrendingMovies = () => {
  
  // Fetch movies from tmdb api and update the store with those movies
  const dispatch = useDispatch();

  const trendingMovies = useSelector(store => store.movies.upcomingMovies);

  const getTrendingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      API_OPTIONS
    );
    const json = await data.json();
   
    dispatch(addTrendingMovies(json.results));
  };

  useEffect(()=> {
      if(!trendingMovies)      getTrendingMovies();
  },[])
}

export default useTrendingMovies;
