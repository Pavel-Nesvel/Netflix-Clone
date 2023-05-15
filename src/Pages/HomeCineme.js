import React, { useState, useEffect } from "react";
import { getMovies } from "../API/SearchMovie";
import { HomeMovie } from "../components/HomeMovie";
import { MovieCard } from "../components/MovieCard";
import { Header } from "../components/Header";
import "../styles/netflix.css";
export const HomeCineme = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState(505642);
  const [traillerPlay, setTraillerPlay] = useState(505642);
  useEffect(() => {
    const loadMovies = async () => {
      let moviesAll = await getMovies();
      setMovies(moviesAll);
    };

    loadMovies();
  }, []);
  return (
    <div className="netflix-container">
      <div className="container">
        <Header />
        <HomeMovie selectedMovieId={selectedMovieId}  traillerPlay={traillerPlay}/>
        {movies &&
          movies.map((movie, key) => (
            <MovieCard
              key={key}
              title={movie.title}
              movies={movie.movies}
              setSelectedMovieId={setSelectedMovieId}
              selectedMovieId={selectedMovieId}
              setTraillerPlay={setTraillerPlay}
            />
          ))}
      </div>
    </div>
  );
};
