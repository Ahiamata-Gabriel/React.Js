import './App.css';
import Navigation from './components/Navigation';
import Main from './components/Main';
import { tempMovieData } from './assets/Data';
import { useState } from 'react';

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  return (
    <>
      <Navigation movies={movies} />
      <Main movies={movies} />
    </>
  );
}
