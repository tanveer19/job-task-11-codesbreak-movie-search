import React from "react";
import ViewMovieModal from "../ViewMovieModal/ViewMovieModal";

const Movie = ({ movie, index }) => {
  const {
    title,
    overview,
    poster_path,
    popularity,
    release_date,
    id,
    original_language,
  } = movie || {};

  const baseImageUrl = "https://image.tmdb.org/t/p/";

  const posterUrl = baseImageUrl + "w200" + poster_path;

  return (
    <div className="">
      <div className="card glass w-96">
        <figure>
          <img src={posterUrl} alt="mdb" />
        </figure>
        <div className="card-body h-64 overflow-hidden">
          <h2 className="card-title">{title}</h2>
          <p className="line-clamp-3">{overview}</p>
          <div className="card-actions justify-center">
            <button className="btn bg-emerald-500 text-white">Rating</button>
            <button className="btn bg-emerald-500 text-white">Watchlist</button>

            <label htmlFor={id} className="btn bg-emerald-500 text-white">
              Details
            </label>
            <ViewMovieModal
              movie={movie}
              posterUrl={posterUrl}
            ></ViewMovieModal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
