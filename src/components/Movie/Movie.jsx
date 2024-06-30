import React from "react";

const Movie = ({ movie, index }) => {
  const { title, overview, poster_path } = movie || {};
  const baseImageUrl = "https://image.tmdb.org/t/p/";
  const posterUrl = baseImageUrl + "w200" + poster_path;
  return (
    <div className="">
      <div className="">
        <img src={posterUrl} alt="" />
      </div>
      <div className="text-sky-400">Name: {title}</div>
      <div className="w-64 overflow-hidden">{overview}</div>
      <br />
    </div>
  );
};

export default Movie;
