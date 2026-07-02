import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
    },
    reducers: {
        //! This is a toggle mechanism allo to open and close the GPT Search fromt using th redux store also done by using the state variable 
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
    },
});

export const { toggleGptSearchView } = gptSlice.actions;
export default gptSlice.reducer;