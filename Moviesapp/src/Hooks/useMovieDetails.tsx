import { useEffect, useState } from "react";

const useMovieDetails = (id: number) => {
  const [movieDetails, setMovieDetails] = useState<any>();
  const [isShow, setIsShow] = useState<boolean>(false)
  const movieDetailFetch = async (id: number) => {
    setIsShow(true)
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`
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
