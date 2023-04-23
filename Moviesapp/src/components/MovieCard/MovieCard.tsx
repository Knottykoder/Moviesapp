import {
  CoverImg,
  InfoColumn,
  MovieContainer,
  MovieInfo,
  MovieName,
} from "./StyledMovieCard";

interface MoviecardInterface {
  item: MovieIteminterface;
  setMovieId(args: number): void;
}

export interface MovieIteminterface {
  title: string;
  poster_path: string;
  release_date: string;
  id: number;
}

const MovieCard: React.FC<MoviecardInterface> = ({ item,setMovieId }) => {
  return (
    <MovieContainer onClick={() => setMovieId(item.id)}>
      <CoverImg src={`http://image.tmdb.org/t/p/w500${item.poster_path}`} />
      <MovieName>{item.title}</MovieName>
      <InfoColumn>
        <MovieInfo>Release Date: {item.release_date}</MovieInfo>
        <MovieInfo>Type: Movie</MovieInfo>
      </InfoColumn>
    </MovieContainer>
  );
};

export default MovieCard;
