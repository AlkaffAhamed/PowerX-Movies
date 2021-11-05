import { Link } from 'react-router-dom';
import { useAllMovies } from 'domains/movie/hooks/use-movie';
import { MovieCard } from 'domains/movie/components/movie-card';
import { Button } from 'components/button';

export const AllMovies = () => 
{
  const { data: allMovies, status, page, setPage } = useAllMovies();
  
  return (
    <>
      <div className="flex justify-between px-10 py-5">
        <Button
          disabled={page <= 1}
          onClick={() => 
            setPage((pageNumber) => pageNumber - 1)
          }>
          Prev
        </Button>
        <Button
          disabled={!allMovies}
          onClick={() => 
            setPage((pageNumber) => pageNumber + 1)
          }>
          Next
        </Button>
      </div>
      {status !== 'success' && (<div className='text-center'><h1>Loading...</h1></div>)}
      <div className="grid lg:grid-cols-5 gap-10 m-8">
        {allMovies && allMovies.map(movie =>
          <Link to={`/movie/${movie._id}`} key={movie._id}>
            <MovieCard data={movie} />
          </Link>
        )}
      </div>
    </>
  );
};