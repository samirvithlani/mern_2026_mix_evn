import axios from "axios";
import React, { useState } from "react";

export const OmdbSearch = () => {
  const [movies, setmovies] = useState([]);
  const [movieName, setmovieName] = useState("")

  const searchMovie = async () => {
    const res = await axios.get(
      //"http://www.omdbapi.com/?apikey=add your key&s=Avatar",
      `http://www.omdbapi.com/?apikey=add your key&s=${movieName}`
    );
    //res = axios object
    console.log(res.data); // res.data -->actual api response..
    console.log(res.data.Search);
    setmovies(res.data.Search); //[]-->Search
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>OmdbSearch</h1>
      <input type="text" onChange={(event)=>{setmovieName(event.target.value)}}></input>

      <button onClick={searchMovie}>Search</button>
      <div className="container">
        <div className="row g-4">
          {movies.map((movie) => {
            return (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card h-100 shadow-sm">
                    <img className="card-img-top" src={movie.Poster}></img>
                    <h4 className="cart-title">{movie.Title}</h4>
                    <h5 className="card-sub-title">{movie.Year}</h5>
                    <h5 className="card-sub-title">{movie.imdbID}</h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
