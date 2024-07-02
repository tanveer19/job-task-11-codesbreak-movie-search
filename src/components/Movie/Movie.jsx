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

  const [watchlist, setWatchlist] = useState([]);

  // load saved watchlist
  useEffect(() => {
    const savedWatchlist = JSON.parse(localStorage.getItem("watchlist"));
    if (savedWatchlist) {
      setWatchlist(savedWatchlist);
    }
  }, []);

  // Add movie to watchlist (if not already added)
  const addToWatchlist = () => {
    const updatedWatchlist = [...watchlist, movie];
    setWatchlist(updatedWatchlist);
    localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
  };

  // Remove movie from watchlist
  const removeFromWatchlist = () => {
    const updatedWatchlist = watchlist.filter((item) => item.id !== movie.id);
    setWatchlist(updatedWatchlist);
    localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
  };

  const isInWatchlist = watchlist.some((item) => item.id === movie.id);

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
          <img className="rounded-lg w-96" src={posterUrl} alt="mdb" />
        </figure>
        <div className="card-body h-64 overflow-hidden">
          <h2 className="card-title">Title: {title}</h2>
          <h2 className="card-title">ID: {id}</h2>
          <p className="line-clamp-5">{overview}</p>
          <div className="card-actions flex items-center justify-center">
            <div className="p-3 rounded-md bg-emerald-500 text-white">
              Rating
            </div>
            <Rating
              value={movieRatings[movie.id] || 0}
              onChange={(rating) => handleRatingChange(movie.id, rating)}
            ></Rating>
            <button
              onClick={isInWatchlist ? removeFromWatchlist : addToWatchlist}
              className={`btn ${
                isInWatchlist ? "bg-gray-500" : "bg-emerald-500"
              } text-white`}
            >
              {isInWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
            </button>

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
