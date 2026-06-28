import React from 'react'

const VideoTitle = ({title, overview }) => {
    return (
        <div className='p-20 absolute bg-gradient-to-r from-black'>
            <h1 className='text-3xl font-bold font-mono text-white'>{title}</h1>
            <p className='py-4 text-lg w-[50%] text-white'>{overview}</p>

            <div>
                <button className='bg-white text-black   p-2 w-28 text-lg  rounded-md bg-opacity-50'>
                   ▶ play
                </button>
                <button className='bg-gray-600 text-black m-4 p-2 w-28 text-lg  rounded-md bg-opacity-50'>
                    More Info
                </button>
            </div>

        </div>
    )
}

// {
//   "id": 550,
//   "results": [
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Fight Club (1999) Trailer - Starring Brad Pitt, Edward Norton, Helena Bonham Carter",
//       "key": "O-b2VfmmbyA",
//       "site": "YouTube",
//       "size": 720,
//       "type": "Trailer",
//       "official": false,
//       "published_at": "2016-03-05T02:03:14.000Z",
//       "id": "639d5326be6d88007f170f44"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "#TBT Trailer",
//       "key": "BdJKm16Co6M",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Trailer",
//       "official": true,
//       "published_at": "2014-10-02T19:20:22.000Z",
//       "id": "5c9294240e0a267cd516835f"
//     }
//   ]
// }



export default VideoTitle