import React from "react";
import { IMG_CDN_URL } from "../utils/constant";

const MoviesCard = ({ posterPath, altTxt }) => {
  if (!posterPath) return null;

  return (
    <div className="w-40 md:w-48 flex-shrink-0 cursor-pointer transition-transform duration-300 hover:scale-95 overflow-hidden ">
      <img
        className="rounded-lg hover:rounded-lg"
        src={IMG_CDN_URL + posterPath}
        alt={altTxt} 
      />
    </div>
  );
};

export default MoviesCard;