import React, { useEffect, useState } from "react";
import ViewMovieModal from "../ViewMovieModal/ViewMovieModal";
import Rating from "../Rating/Rating";

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

  const posterUrl = baseImageUrl + "w300" + poster_path;

  const [movieRatings, setMovieRatings] = useState({});

  // load saved ratings

  useEffect(() => {
    const savedRatings = JSON.parse(localStorage.getItem("movieRatings"));
    if (savedRatings) {
      setMovieRatings(savedRatings);
    }
  }, []);
  // update movie ratings

  const handleRatingChange = (movieId, rating) => {
    const updatedRatings = { ...movieRatings, [movieId]: rating };
    setMovieRatings(updatedRatings);
    localStorage.setItem("movieRatings", JSON.stringify(updatedRatings));
  };

  return (
    <div className="">
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img className="rounded-lg" src={posterUrl} alt="mdb" />
        </figure>
        <div className="card-body h-64 overflow-hidden">
          <h2 className="card-title">{title}</h2>
          <p className="line-clamp-1">{overview}</p>
          <div className="card-actions flex items-center justify-center">
            <div className="p-3 rounded-md bg-emerald-500 text-white">
              Rating
            </div>
            <Rating
              value={movieRatings[movie.id] || 0}
              onChange={(rating) => handleRatingChange(movie.id, rating)}
            ></Rating>
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
