import react from 'react';
import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addTopRated } from '../utils/moviesSlice'

const useTopRated = () => {

    const dispatch = useDispatch();

    const getTopRatedMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS)

        const json = await data.json()
        dispatch(addTopRated(json.results));
        // console.log(json.results);

    }

    useEffect(() => {
        getTopRatedMovies();
    }, [])

}

export default useTopRated