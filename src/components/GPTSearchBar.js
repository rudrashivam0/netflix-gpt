import React from "react";
import lang from "../utils/languageConstants"
import { useSelector } from "react-redux";

const GPTSearchBar = () => {

    const langkey = useSelector((store) => store.config.lang);
    console.log(langkey);

    return (
        <div className="flex justify-center pt-24 md:pt-40 px-4">
            <form className="w-full max-w-3xl bg-black/80 backdrop-blur-sm rounded-lg p-4 flex flex-col sm:flex-row gap-4 shadow-lg">
                <input
                    type="text"
                    placeholder={lang[langkey].gptSearchPlaceHolder}
                    className="flex-1 px-4 py-3 rounded-md bg-white text-black outline-none focus:ring-2 focus:ring-red-600"
                />

                <button
                    type="submit"
                    className="bg-red-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-red-700 transition duration-300"
                >
                    {lang[langkey].search}
                </button>
            </form>
        </div>
    );
};

export default GPTSearchBar;