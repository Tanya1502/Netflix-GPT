import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addNowPlayingMovies } from '../utils/moviesSlice';

const useNowPlayingMovies = () => {
  
  // Fetch movies from tmdb api and update the store with those movies
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies);

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
   
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(()=> {
      if(!nowPlayingMovies)      getNowPlayingMovies();
  },[])
}

export default useNowPlayingMovies
