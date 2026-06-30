import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        addTrailervideo: null,
        PopularMovie: null,
        TopRated: null,
        UpcomingMovies: null,
    },
    reducers: {
        addNowPlayingMovie: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovie: (state, action) => {
            state.PopularMovie = action.payload;
        },
        addTrailervideo: (state, action) => {
            state.addTrailervideo = action.payload;
        },
        addTopRated: (state, action) => {
            state.TopRated = action.payload;
        },
        addUpcoming: (state, action) => {
            state.UpcomingMovies = action.payload;
        }
    },

});

export const { addNowPlayingMovie, addTrailervideo, addPopularMovie, addTopRated, addUpcoming } = movieSlice.actions;
export default movieSlice.reducer
