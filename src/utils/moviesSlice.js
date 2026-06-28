import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        addTrailervideo: null,
    },
    reducers: {
        addNowPlayingMovie: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailervideo: (state, action) => {
            state.addTrailervideo = action.payload;
        },
    },

});

export const { addNowPlayingMovie,addTrailervideo } = movieSlice.actions;
export default movieSlice.reducer 
