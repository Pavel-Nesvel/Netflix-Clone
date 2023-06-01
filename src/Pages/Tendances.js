import React, { useEffect, useState } from "react";
import { getAllTendance } from "../API/SearchMovie";
import { Header } from "../components/Header";
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
  return (
    <div className="tendances-container">
      <Header />
  
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
