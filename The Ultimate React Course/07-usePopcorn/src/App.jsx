// import './App.css';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Search from './components/Search';
import NumResults from './components/NumResults';
import Box from './components/Box';
import { tempMovieData, tempWatchedData } from './assets/Data';
import MovieList from './components/MovieList';
import { useState } from 'react';
import Summary from './components/Summary';
import WatchedList from './components/WatchedList';
import StarRating from './components/StarRating';

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  return (
    <>
      <StarRating maxRating={6} />

      {/* <Navigation>
        <Search />
        <NumResults movies={movies} />
      </Navigation>
      <Main>
        <Box>{<MovieList movies={movies} />}</Box>
        <Box>
          <Summary watched={watched} />
          <WatchedList watched={watched} />
        </Box>
      </Main> */}
    </>
  );
}
