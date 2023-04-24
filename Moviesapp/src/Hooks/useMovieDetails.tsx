import { useEffect, useState } from "react";

const useMovieDetails = (id: number) => {
  const [movieDetails, setMovieDetails] = useState<any>();
  const [isShow, setIsShow] = useState<boolean>(false)
  const movieDetailFetch = async (id: number) => {
    setIsShow(true)
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=859d30ac79f2824cd9c902c9676edca1&language=en-US`
    );
    const res = await data.json();
    setMovieDetails(res);
    
  };
  useEffect(() => {
    setTimeout(() => {
      movieDetailFetch(id);
    }, 2000);
  }, [id]);
  return [movieDetails,isShow,setIsShow];
};

export default useMovieDetails;
