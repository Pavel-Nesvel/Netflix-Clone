import React, { useEffect, useRef,useState } from "react";
import { Scroller } from "../Functions/Scroller";
export const MovieCard = ({ movies, title, setSelectedMovieId }) => {
  const { scrollerRef, handlePrev, handleNext } = Scroller();
  const [movieIds, setMovieIds] = useState([]);
  const addToLocalStorage = (filmId) => {
    let AddStorage = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];

    if (!AddStorage.includes(filmId.toString())) {
      AddStorage.push(filmId);
      window.localStorage.movies = AddStorage;
    }
  };
  //Triez les films par date de sortie en utilisant la méthode sort()
  const sortedMovies = movies.data.results.sort((a, b) => {
    return new Date(b.release_date) - new Date(a.release_date);
  });

  useEffect(() => {
    // Mettre à jour les IDs de films chaque fois que les données de films changent
    if (movies.data && movies.data.results) {
      const ids = movies.data.results.map((movie) => movie.id);
      setMovieIds(ids);
    }
  }, [movies]);

  useEffect(() => {
    // Déclencher la fonction toutes les 30 secondes
    const intervalId = setInterval(() => {
      // Obtenir l'ID du film suivant
      const nextMovieId = movieIds.shift();
      // Ajouter l'ID du film à la fin de la liste
      movieIds.push(nextMovieId);
      // Appeler setSelectedMovieId avec l'ID du film
      setSelectedMovieId(movieIds);
    }, 10000);
    // Nettoyer l'intervalle lors du démontage du composant
    return () => clearInterval(intervalId);
  }, [movieIds, setSelectedMovieId]);

  
  return (
    <div className="movie-card">
      <h1 className="movie-title">{title}</h1>
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
