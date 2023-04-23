import {
  Close,
  Container,
  CoverImg,
  InfoColumn,
  MovieInfoRow,
  MovieNameTitle,
} from "./StyledMovieInfo";

export interface MovieDetailsinterface {
  poster_path: string;
  title: string;
  vote_average: number;
  original_language: string;
  release_date: string;
  genres: any[];
  overview: string;
}

interface MovieInfoInterface {
  movieDetails: MovieDetailsinterface;
  setMovieId(): void;
}

const MovieInfo: React.FC<MovieInfoInterface> = ({
  movieDetails,
  setMovieId,
}) => {
  return (
    <Container>
      {movieDetails?.title ? (
        <>
          <CoverImg
            src={`http://image.tmdb.org/t/p/w500${movieDetails?.poster_path}`}
          />
          <InfoColumn>
            <MovieNameTitle>{`Movie: ${movieDetails?.title}`}</MovieNameTitle>
            <MovieInfoRow>
              IMDB Rating: <span>{movieDetails?.vote_average}</span>
            </MovieInfoRow>
            <MovieInfoRow>
              Language: <span>{movieDetails?.original_language}</span>
            </MovieInfoRow>
            <MovieInfoRow>
              Released: <span>{movieDetails?.release_date}</span>
            </MovieInfoRow>
            <MovieInfoRow>
              Genre: <span>{movieDetails?.genres?.[0]?.name}</span>
            </MovieInfoRow>
            <MovieInfoRow>
              Plot: <span>{movieDetails?.overview}</span>
            </MovieInfoRow>
          </InfoColumn>
          <Close onClick={() => setMovieId()}>X</Close>
        </>
      ) : (
        "Loading..."
      )}
    </Container>
  );
};

export default MovieInfo;
