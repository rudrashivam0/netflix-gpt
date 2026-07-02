import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./userSlice";
import movieReducer from "./moviesSlice"
import gptSlice from "../utils/gptSlice"
import configSlice from "../utils/configSlice"

const appStore = configureStore({
    reducer: {
        user: useReducer,
        movies: movieReducer,
        gpt: gptSlice,
        config: configSlice,
    },


})

export default appStore