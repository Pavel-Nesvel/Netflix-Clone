import React from "react";
import "../styles/mysliste.css";

export const MylisteCard = ({ movie }) => {
  const handleDeleteStorage = () => {
    let storageData = window.localStorage.movies.split(",");
    let newData = storageData.filter((film) => film != movie.id);
    window.localStorage.movies = newData;
  };
  const dateFormater = (date) => {
    let newDate = new Date(date).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    });
    return newDate;
  };
  return (
    <div className="card-container">
      <div className="card-img">
        <img src={`https://image.tmdb.org/t/p/original/` + movie.poster_path} />
      </div>
      <h2>{movie.title}</h2>
      {movie.release_date ? (
        <h5>Sorti le : {dateFormater(movie.release_date)}</h5>
      ) : null}

      <h4>
        {movie.vote_average.toFixed(1)}/10 <span>⭐</span>
      </h4>
      <ul>
        {movie.genres ? (
          movie.genres.map((genre, key) => <li key={key}>{genre.name}</li>)
        ) : (
          <h3>pas de genres dispo</h3>
        )}
      </ul>
      {movie.overview ? <h3>Synopsis</h3> : ""}
      <p>{movie.overview}</p>

      <div
        className="btn"
        onClick={() => {
          handleDeleteStorage();
          window.location.reload();
        }}
      >
        Supprimer de la liste
      </div>
    </div>
  );
};
