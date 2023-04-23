import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import MovieList from "./components/MoviesListContainer/MovieList";
import useMovieFetch from "./Hooks/useMovieFetch";
import MovieInfo from "./components/MovieInfo/MovieInfo";
import useMovieDetails from "./Hooks/useMovieDetails";

function App() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [movieId, setMovieId] = useState(0);
  const movies = useMovieFetch(searchQuery);
  const movieDetails = useMovieDetails(movieId);
  
  return (
    <>
      <Header setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
      {movieDetails?.title && <MovieInfo movieDetails={movieDetails} setMovieId={setMovieId}/>}
      <MovieList movies={movies} setMovieId={setMovieId}/>
    </>
  );
}

export default App;


