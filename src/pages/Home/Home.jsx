import React, { useEffect, useState } from "react";

const tmdb_api_key = import.meta.env.VITE_apiKey;
const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/550?api_key=${tmdb_api_key}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  }, []);

  return (
    <div className="text-white  flex flex-col items-center">
      <div className="text-3xl font-bold mr-10 my-10">Movie Search </div>
      <div className="">
        <input
          className="md:w-96 bg-white text-black p-2 rounded-full"
          type="text"
        />
        <button className="btn bg-sky-800 rounded-full ml-5">Search</button>
      </div>
    </div>
  );
};

export default Home;
