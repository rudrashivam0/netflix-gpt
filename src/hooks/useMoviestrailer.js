import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constant'
import { addTrailervideo } from '../utils/moviesSlice';


const useMoviestrailer = (movies_id) => {
    const dispatch = useDispatch();
    console.log(movies_id);

    const getMoviesData = async () => {

        const data = await fetch(

            "https://api.themoviedb.org/3/movie/" + movies_id + "/videos?language=en-US", API_OPTIONS
        );

        const json = await data.json();
        // console.log("Results:", json.results);

        const filteredData = json.results.filter((video) => video.type === "Trailer");

        const trailer = filteredData.length ? filteredData[0] : json.results[0];

        // setTrailer(trailer.key);

        dispatch(addTrailervideo(trailer));
    };
    useEffect(() => {
        getMoviesData();
    }, [])




}

export default useMoviestrailer