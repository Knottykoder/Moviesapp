import { useEffect, useState } from "react";

const useMovieFetch = (query: string) => {
  const [movies, setMovies] = useState([]);
  const movieFetch = async (query: string) => {
    const data = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&query=${query}`);
    const res = await data.json();
    setMovies(res.results);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      movieFetch(query);
    }, 2000);
   return () => clearTimeout(timer)
  }, [query]);
  return movies;
};

export default useMovieFetch;
