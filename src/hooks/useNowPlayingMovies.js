import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addNowPlayingMovies } from '../utils/moviesSlice';

const useNowPlayingMovies = () => {
  
  // Fetch movies from tmdb api and update the store with those movies
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
   
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(()=> {
      getNowPlayingMovies();
  },[])
}

export default useNowPlayingMovies
