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

                <MoviesList title={"Top Rated"}
                    movies={movies.TopRated} />

                <MoviesList title={"Popular"}
                    movies={movies.PopularMovie} />

                <MoviesList title={"Upcoming Movies"}
                    movies={movies.UpcomingMovies} />

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