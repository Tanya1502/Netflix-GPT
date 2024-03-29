import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import Header from './Header'

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies)

    if(movies === null)  return;

    const mainMovie = movies[0];
   

    const { original_title, overview, id } = mainMovie;
 //pt-[40%] bg-black md:pt-0
  return (
    <div className='md:mb-[-22px]'>
     
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground movieId={id} /> 
    </div>
  )
}

export default MainContainer
