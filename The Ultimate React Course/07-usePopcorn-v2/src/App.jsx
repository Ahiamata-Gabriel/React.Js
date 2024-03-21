import "./App.css";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Search from "./components/Search";
import NumResults from "./components/NumResults";
import Box from "./components/Box";
import { tempMovieData, tempWatchedData } from "./assets/Data";
import MovieList from "./components/MovieList";
import { useEffect, useState } from "react";
import Summary from "./components/Summary";
import WatchedList from "./components/WatchedList";
import Loading from "./components/Loading";
import ErrorComponent from "./components/ErrorComponent";
import MovieDetail from "./components/MovieDetail";
import StarRating from "./components/StarRating";

const KEY = "73c9dba8";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState(tempWatchedData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [selectedID, setSelectedId] = useState(null);

  const handleSelection = (id) => {
    setSelectedId((selectedID) => (id === selectedID ? null : id));
  };

  const handleCloseMovie = () => {
    setSelectedId(null);
  };

  const handleAddWacthed = (movie) => {
    setWatched((movie) => [watched, ...movie]);
  };

  useEffect(
    function () {
      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
          );

          if (!res.ok) throw new Error("Something went wrong");
          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie not found");

          setMovies(data.Search);
        } catch (err) {
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }
      fetchMovies();
    },
    [query]
  );

  return (
    <>
      <Navigation>
        <Search query={query} setQuery={setQuery} />
        {movies && <NumResults movies={movies} />}
      </Navigation>
      <Main>
        <Box>
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelection} />
          )}
          {error && <ErrorComponent message={error} />}
          {isLoading && <Loading />}
          {query.length < 3 && (
            <ErrorComponent message="Waiting to Display your Favourite movies" />
          )}
        </Box>
        <Box>
          {selectedID ? (
            <MovieDetail
              selectedID={selectedID}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWacthed}
            />
          ) : (
            <>
              <Summary watched={watched} />
              <WatchedList watched={watched} />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
