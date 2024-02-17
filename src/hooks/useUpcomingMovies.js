import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addUpcomingMovies } from '../utils/moviesSlice';

const useUpcomingMovies = () => {
  
  // Fetch movies from tmdb api and update the store with those movies
  const dispatch = useDispatch();

  const upcomingMovies = useSelector(store => store.movies.upcomingMovies);

  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      API_OPTIONS
    );
    const json = await data.json();
   
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(()=> {
      if(!upcomingMovies)      getUpcomingMovies();
  },[])
}

export default useUpcomingMovies;
