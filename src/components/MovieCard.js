import React, { useState, useRef } from "react";
import "../styles/movieCard.css";

export const MovieCard = ({ movies, title, setSelectedMovieId }) => {
  const scrollerRef = useRef(null);
  const handlePrev = () => {
    scrollerRef.current.scrollLeft -= 500;
  };

  const handleNext = () => {
    scrollerRef.current.scrollLeft += 500;
  };
  const addToLocalStorage = (filmId) => {
    let AddStorage = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];

    if (!AddStorage.includes(filmId.toString())) {
      AddStorage.push(filmId);
      window.localStorage.movies = AddStorage;
    }
 
  };
  // Triez les films par date de sortie en utilisant la méthode sort()
const sortedMovies = movies.data.results.sort((a, b) => {
  return new Date(b.release_date) - new Date(a.release_date);
});

  // console.log("next");

  console.log("move pavel", movies.data.results);
  return (
    <div className="movie-card">
      <h1>{title}</h1>
      <div className="chevron-left" onClick={handlePrev}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </div>
      <div className="chevron-right" onClick={handleNext}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>

      <div
        ref={scrollerRef}
        className="movie-element"
        // style={{ display: 'flex', width: `${200 * movies.data.results.length}px` }}
      >
        {movies.data.results.length > 0 &&
          sortedMovies.map((movie, key) => (
            <div
              className="movie-img"
              key={key}
              onClick={() => setSelectedMovieId(movie.id)}
            >
              <div
                className="chevron-liste"
                onClick={() => addToLocalStorage(movie.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              <img
                src={`https://image.tmdb.org/t/p/original/` + movie.poster_path}
              />
            </div>
          ))}
      </div>
    </div>
  );
};
