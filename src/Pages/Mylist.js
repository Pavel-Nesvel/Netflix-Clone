import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { getMovieId } from "../API/SearchMovie";
import { MylisteCard } from "../components/MylisteCard";

export const Mylist = () => {
  const [listeData, setListeData] = useState([]);

  useEffect(() => {
    let getId = async () => {
      let listeMovieId = window.localStorage.movies
        ? window.localStorage.movies.split(",")
        : [];
      for (let i = 0; i < listeMovieId.length; i++) {
        let id = await getMovieId(listeMovieId[i]);
        setListeData((listeData) => [...listeData, id.data]);
      }
    };
    getId();
  }, []);
  return (
    <div className="user-list-page">
      <Header />

      <h2 className=" user-heart">
        Coup de coeur <span>❤️</span>
      </h2>

      <div className="user-container">
        {listeData.length > 0 ? (
          listeData.map((movie, key) => <MylisteCard movie={movie} key={key} />)
        ) : (
          <h2>Votre liste ne contient aucun film pour le moment</h2>
        )}
      </div>
    </div>
  );
};
