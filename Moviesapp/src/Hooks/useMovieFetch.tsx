import { useEffect, useState } from "react";

const useMovieFetch = (query: string) => {
  const [movies, setMovies] = useState([]);
  const movieFetch = async (query: string) => {
    const data = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=859d30ac79f2824cd9c902c9676edca1&language=en-US&page=1&query=${query}`);
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
