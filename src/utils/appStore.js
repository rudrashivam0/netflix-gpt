import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./userSlice";
import movieReducer from "./moviesSlice"
import addTrailervideo from "./moviesSlice"

const appStore = configureStore({
    reducer: {
        user: useReducer,
        movies: movieReducer,
    },


})

export default appStore