import MovieCard, { MovieIteminterface } from "../MovieCard/MovieCard";
import { MovieListContainer } from "./StyledMovieList";

interface MovieListInterface {
  movies: MovieIteminterface[];
  setMovieId(args: number): void;
}

const MovieList: React.FC<MovieListInterface> = ({ movies,setMovieId }) => {
  return (
    <MovieListContainer>
      {movies?.length
        ? movies.map((item) => <MovieCard key={item.id} item={item} setMovieId={setMovieId}/>)
        : "No Movie Search"}
    </MovieListContainer>
  );
};

export default MovieList;
