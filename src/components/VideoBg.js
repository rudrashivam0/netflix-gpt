import React from 'react'
import { useSelector } from 'react-redux'
import useMoviestrailer from "../hooks/useMoviestrailer"
const VideoBg = ({ movies_id }) => {

     const trailerVideo = useSelector(store => store?.movies?.addTrailervideo);
    // const [trailerId, setTrailer] = useState(null);

    // need to fetch the video bg and trailler and 
    // to do all i need movies Id 

    //! this is my custom hook which gives the trailer 
    useMoviestrailer( movies_id);

    return (
        <div className='w-full'>
            <iframe className='w-full h-full aspect-video'
                src={"https://www.youtube.com/embed/" + trailerVideo?.key}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
        </div>
    )
}

export default VideoBg