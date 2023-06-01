import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { getMovieId, getMovieVideo } from "../API/SearchMovie";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "../styles/homeMovie.css";
import { NavLink } from "react-router-dom";

export const HomeMovie = ({ selectedMovieId, traillerPlay }) => {
  const [activeVideo, setActiveVideo] = useState();
  const [activePlay, setActivePlay] = useState();
  const [showVideo, setShowVideo] = useState(false);
  const [genres, setGenres] = useState([]);
  const playId = activePlay?.data.videos?.results[0];
  const dateFormter = (date) => {
    let newDate = new Date(date).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    });
    return newDate;
  };

  useEffect(() => {
    const play = async () => {
      let videoPlay = await getMovieVideo(selectedMovieId);
      setActivePlay(videoPlay);
    };
    play();
  }, [traillerPlay]);

  useEffect(() => {
    const movieId = async () => {
      let video = await getMovieVideo(selectedMovieId);
      setActiveVideo(video);
    };
    movieId();
  }, [selectedMovieId]);

  useEffect(() => {
    const getMovieGenres = () => {
      let listeGenres = [];
      if (activeVideo) {
        for (const video of activeVideo?.data.genres) {
          listeGenres.push(video.name);
        }
        setGenres(listeGenres);
      }
    };
    getMovieGenres();
  }, [activeVideo]);

  return (
    <div
      className="home-movies"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${
          activeVideo?.data.backdrop_path
            ? activeVideo.data.backdrop_path
            : activeVideo?.data.poster_path
        })`,
      }}
    >
      <div className="movie-content">
        <h1>{activeVideo?.data.original_title}</h1>
        <h2>
          {" "}
          Sortie le:{" "}
          {activeVideo?.data.release_date
            ? activeVideo?.data.release_date
            : dateFormter(activeVideo?.data.videos?.results[0]?.published_at)}
        </h2>

        <h3>
          <CircularProgressbar
            value={activeVideo?.data.vote_average * 10}
            text={`${activeVideo?.data.vote_average}%`}
            styles={{
              root: { width: "40px", height: "50px" },
              path: { stroke: "#DF3D1B" },
              text: { fontSize: "1rem", fill: "#0075FF" },
            }}
          />
          <span>
            <em className="voterage-note"></em>⭐
          </span>
        </h3>

        <p className="production-companies">
          Produit par : {activeVideo?.data.production_companies[0]?.name}
        </p>
        <div className="movie-genres">
          <span>Genres :</span>
          {genres.map((genre, key) => (
            <ul key={key}>
              <li>{genre}</li>
            </ul>
          ))}
        </div>
        <div className="synopsis">
          <span>synopsis :</span>

          <p>{activeVideo?.data.overview}</p>
        </div>

        {showVideo && (
          <YouTube
            className="movie-video-playing"
            videoId={playId?.key}
            containerClassName={"youtube-container "}
            opts={{
              width: "100%",
              height: "100%",
              playerVars: {
                autoplay: 1,
                controls: 0,
                cc_load_policy: 0,
                fs: 0,
                iv_load_policy: 0,
                modestbranding: 0,
                rel: 0,
                showinfo: 0,
              },
            }}
          />
        )}

        {showVideo ? (
          <button className="play-button" onClick={() => setShowVideo(false)}>
            Ferme
          </button>
        ) : (
          <button className="play-button" onClick={() => setShowVideo(true)}>
            Bande-annonce
          </button>
        )}
        <button className="listes-button">
          <NavLink to="myliste">My listes</NavLink>
        </button>
        <div className="hearon-icon">
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
              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
