import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GptMoviesSuggestion from './GptMoviesSuggestion'
import { BG_IMG } from '../utils/constant'

const GPTSearch = () => {
    return (
        <div className='text-white'>
            <div className='absolute -z-10'>
                <img src={BG_IMG} alt="bg" className='w-full h-screen object-cover' />
            </div>
            {/* 
            - Search Bar
            - GptMoviesSuggestion
             */}
            <GPTSearchBar />
            <GptMoviesSuggestion />
        </div>
    )
}

export default GPTSearch