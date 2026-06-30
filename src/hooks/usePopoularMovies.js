import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addPopularMovie } from '../utils/moviesSlice'


const usePopoularMovies = () => {

    const dispatch = useDispatch();

    const getPopularMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS)

        const json = await data.json()
        dispatch(addPopularMovie(json.results));
        // console.log(json.results);

    }

    useEffect(() => {
        getPopularMovies();
    }, [])
}

export default usePopoularMovies;
