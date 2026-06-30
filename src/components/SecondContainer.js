import React from 'react'
import MoviesList from './MoviesList'
import { useSelector } from 'react-redux'

const SecondContainer = () => {
    const movies = useSelector(store => store?.movies);

    return (
        <div className='bg-black'>
            <div className='-mt-40 pl-7  relative z-20'>
                <MoviesList title={"Now Playing"}
                    movies={movies.nowPlayingMovies} />

                <MoviesList title={"Trending"}
                    movies={movies.nowPlayingMovies} />

                <MoviesList title={"Popular"}
                    movies={movies.nowPlayingMovies} />

                <MoviesList title={"Upcoming Movies"}
                    movies={movies.nowPlayingMovies} />

                <MoviesList title={"horror"}
                    movies={movies.nowPlayingMovies} />
            </div>
            {/* 
            Mov ies list - 
                Movies Card * n
            Movies - Now Playing 
            Movies List trainding 
            moviesList hOrrer 

            */}
        </div>
    )
}

export default SecondContainer