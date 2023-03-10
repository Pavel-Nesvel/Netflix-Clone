import React, { useEffect, useState } from "react";
import { getAllTendance } from "../API/SearchMovie";
import { Header } from "../components/Header";
import { HomeMovie } from "../components/HomeMovie";
import { TendanceCard } from "../components/TendanceCard";
export const Tendances = () => {
  const [tendances, setTendances] = useState([]);

  useEffect(() => {
    const loadTendance = async () => {
      let ListeTendance = await getAllTendance();
      setTendances(ListeTendance);
    };
    loadTendance();
  }, []);
  //  console.log("tendance",tendances);
  return (
    <div className="tendances-container">
      <Header />
      <HomeMovie/>
      {tendances &&
        tendances.map((tendance, key) => (
          <TendanceCard
            key={key}
            title={tendance.title}
            tendance={tendance.movies}
          />
        ))}
    </div>
  );
};
