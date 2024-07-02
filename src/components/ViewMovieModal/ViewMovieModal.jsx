import React from "react";

const ViewMovieModal = ({ movie, posterUrl }) => {
  const {
    title,
    overview,
    poster_path,
    popularity,
    release_date,
    id,
    original_language,
  } = movie || {};
  return (
    <div>
      <input type="checkbox" id={id} className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <figure>
            <img className="rounded-xl" src={posterUrl} alt="mdb" />
          </figure>
          <h3 className="text-lg font-bold mt-5">Title: {title}</h3>
          <p className="py-2">ID: {id}</p>
          <p className="py-2"> Release Date: {release_date}</p>
          <p className="py-2"> Popularity: {popularity}</p>
          <div className="modal-action">
            <label htmlFor={id} className="btn">
              Close!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewMovieModal;
