import React, { useEffect, useState } from "react";
import Movie from "../../components/Movie/Movie";

const tmdb_api_key = import.meta.env.VITE_apiKey;
const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchText}&api_key=${tmdb_api_key}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setMovies(data.results);
      });
  };

  return (
    <div className="text-white  flex flex-col items-center">
      <a href="/">
        <div className="text-3xl font-bold mr-10 mt-10">Movie Search </div>
      </a>
      <div className="my-10">
        <input
          onChange={(e) => setSearchText(e.target.value)}
          className="md:w-96 bg-white text-black p-2 rounded-full"
          type="text"
        />
        <button
          onClick={handleSearch}
          className="btn bg-emerald-500 text-white  ml-5"
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap justify-center gap-7">
        {movies.map((movie, index) => (
          <Movie key={movie.id} movie={movie} index={index}></Movie>
        ))}
      </div>
    </div>
  );
};

export default Home;
