import React from 'react'
import { useSelector } from 'react-redux'
import VideoBg from './VideoBg';
import VideoTitle from './VideoTitle';

const MainContainer = () => {

    const movies = useSelector(store => store?.movies?.nowPlayingMovies);

    if (movies === null) return;

    const mainMovie = movies[4];
    // console.log(mainMovie);

    if (mainMovie === undefined) return;
    const { original_title, overview, id } = mainMovie;



    return ( 
        <div>
            <VideoTitle title={original_title} overview={overview} />

            <VideoBg movies_id={id} />

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