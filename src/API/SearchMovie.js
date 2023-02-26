import axios from "axios";

const API_KEY = "93c0aecb2a042c97c443b348e7ce6804";
const API_URL = "https://api.themoviedb.org/3/";

const fetchMovies = async (link) => {
  return await axios.get(
    `${API_URL}${link}?&api_key=${API_KEY}&language=fr-FR`
  );
};
export const getMovieId = async (movieId) => {
  return await fetchMovies(`movie/${movieId}`);
};
export const getMovieVideo = async (movieId) => {
  const video = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=fr-FR&append_to_response=videos`
  );
  return video;
};
export const  getAllTendance=async()=>{
  return[
    {
      original_title: "Daily Trending Movie",
      title: "Tendance journalière des Films",
      movies: await fetchMovies("trending/movie/day"),
    },
    {
      original_title: "week Trending all",
      title: "Tendance hebdomadaire",
      movies: await fetchMovies("trending/all/week"),
    },

    {
      original_title: "Daily Trending tv",
      title: "Tendance journalière des émissions TV",
      movies: await fetchMovies("trending/tv/day"),
    },
    {
      original_title: "Daily Trending all",
      title: "Toutes les tendances du jour",
      movies: await fetchMovies("trending/all/day"),
    },


  ]
};
export const getMovies = async () => {
  return [
    {
      original_title: "Get Now Playing",
      title: "Films Jouez en salles actuels",
      movies: await fetchMovies("movie/now_playing"),
    },
    {
      original_title: "Get Upcoming",
      title: "Film à venir dans les salles",
      movies: await fetchMovies("movie/upcoming"),
    },
    {
      original_title: "Top Rated",
      title: "Film les mieux notés",
      movies: await fetchMovies("movie/top_rated"),
    },

    {
      original_title: "Get Popular",
      title: "Listes des films populaires actuels",
      movies: await fetchMovies("movie/popular"),
    },


    {
      original_title: "Animation ",
      title: "Animation ",
      movies: await fetchMovies("discover/movie?with_genres=5"),
    },
    {
      original_title: " Top Rated",
      title: "Emisions télé les mieux notés",
      movies: await fetchMovies("tv/top_rated"),
    },

    {
      original_title: " Top Rated tv",
      title: "Emision populaire",
      movies: await fetchMovies("tv/popular"),
    },
    {
      original_title: " TV On The Air",
      title: "Emissions télé actuellemnt diffusées",
      movies: await fetchMovies("tv/on_the_air"),
    },
    {
      original_title: "TV Airing Today",
      title: "Emissions télévision diffusées aujourd'hui ",
      movies: await fetchMovies("tv/airing_today"),
    },
    {
      original_title: " current popular TV ",
      title: "Emissions télévision sur notre site ",
      movies: await fetchMovies("tv/popular"),
    },
    {
      original_title: "MOVIE Adventure ",
      title: "Movie Adventure ",
      movies: await fetchMovies("discover/movie?with_genres=12"),
    },
    {
      original_title: "Get Recommendations",
      title: "Famille de film Recommandé",
      movies: await fetchMovies(`/tv/550/recommendations`),
    },
    {
      original_title: "TV SHOW Family",
      title: "SHOW Family",
      movies: await fetchMovies("discover/movie?with_genres=10751"),
    },
    {
      original_title: "Drame",
      title: "Films Sortie en 2014",
      movies: await fetchMovies(
        "discover/movie?with_genres=18&primary_release_year=2014"
      ),
    },
    {
      original_title: "Best movie drama",
      title: "Meilleur film de Drame",
      movies: await fetchMovies("discover/movie?with_genres=28"),
    },
    {
      original_title: "Best movie drama",
      title: "Meilleur film de Drame 2",
      movies: await fetchMovies("discover/movie?with_genres=10749"),
    },
    {
      original_title: "Best movie drama",
      title: "Meilleur film de Drame 3",
      movies: await fetchMovies("discover/movie?with_genres=99"),
    },
    {
      original_title: "tt",
      title: " Liam Neeson's ",
      movies: await fetchMovies(
        "discover/movie?certification_country=US&certification=R&sort_by=revenue.desc&with_cast=3896"
      ),
    },
  ];
};
