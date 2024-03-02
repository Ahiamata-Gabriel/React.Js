import { useState } from 'react';
import { tempMovieData } from '../assets/Data';
import Movie from './Movie';

const MovieList = () => {
  const [movies, setMovies] = useState(tempMovieData);
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
};

export default MovieList;
