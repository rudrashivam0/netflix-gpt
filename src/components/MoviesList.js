import React from "react";

import MoviesCard from "./MoviesCard";

const MoviesList = ({ title, movies }) => {

    if (!movies) return null;

    return (

        <div className="px-8 py-4">

            <h1 className="text-white text-2xl font-bold mb-4">

                {title}

            </h1>

            <div className="flex gap-4 overflow-x-scroll no-scrollbar">

                {movies.map((movie) => (
                    <MoviesCard key={movie.id} posterPath={movie.poster_path} altTxt={movie.title}
                    />

                ))}

            </div>

        </div>

    );

};

export default MoviesList;