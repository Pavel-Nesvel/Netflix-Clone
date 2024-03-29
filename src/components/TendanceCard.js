import React, { useRef } from "react";
import "../styles/movieCard.css";
import { UseScroller } from "../Functions/Scroller";
export const TendanceCard = ({ title, tendance }) => {
  const { scrollerRef, handlePrev, handleNext } = UseScroller();
  return (
    <div className="tendance-container">
      <div className="movie-card">
        <h1 className="tendence-title">{title}</h1>
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

        <div ref={scrollerRef} className="movie-element">
          {tendance.data.results.length > 0 &&
            tendance.data.results.map((movie, key) => (
              <div className="movie-img" key={key}>
                <img
                  src={
                    `https://image.tmdb.org/t/p/original/` + movie.poster_path
                  }
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
