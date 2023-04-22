import MovieCard, { MovieIteminterface } from "../MovieCard/MovieCard";
import { MovieListContainer } from "./StyledMovieList";

interface MovieListInterface {
  movies: MovieIteminterface[];
}

const MovieList: React.FC<MovieListInterface> = ({ movies }) => {
  return (
    <MovieListContainer>
      {movies?.length
        ? movies.map((item) => <MovieCard key={item.id} item={item} />)
        : "No Movie Search"}
    </MovieListContainer>
  );
};

export default MovieList;
