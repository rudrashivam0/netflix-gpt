import React from 'react'
import { useSelector } from 'react-redux'
import VideoBg from './VideoBg';
import VideoTitle from './VideoTitle';

const MainContainer = () => {

    const movies = useSelector(store => store?.movies?.nowPlayingMovies);
    console.log(movies);


    return (
        <div>
            <VideoTitle />
            <VideoBg />

            {/* 
            need to show the VideoIn Bg 
            need to show the Viedo Title
            need to show the Viedo Description
            and we get the  data from the Redux Store 
             */}
        </div>
    )
}

export default MainContainer