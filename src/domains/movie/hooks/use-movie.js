import { useState } from 'react';
import { useQuery } from 'react-query';
import { getAllMovies, getMovie } from 'domains/movie/movieservice';

export const useAllMovies = () => {
  const [page, setPage] = useState(1);
  
  const query = useQuery(["movies", page], () => {
    // Async function for grabbing data
    return getAllMovies(page);
  }, { keepPreviousData : true })
  
  return {
    ...query,
    page,
    setPage
  };
};

export const useMovie = (movieId) => {
  const query = useQuery("movie", () => getMovie(movieId));
  
  return {
    ...query
  }
}

