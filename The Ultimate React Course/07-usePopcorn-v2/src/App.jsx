import "./App.css";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Search from "./components/Search";
import NumResults from "./components/NumResults";
import Box from "./components/Box";
import MovieList from "./components/MovieList";
import { useEffect, useState } from "react";
import Summary from "./components/Summary";
import WatchedList from "./components/WatchedList";
import Loading from "./components/Loading";
import ErrorComponent from "./components/ErrorComponent";
import MovieDetail from "./components/MovieDetail";
import { useMovies } from "./utils/useMovies";
import { useLocalStorageState } from "./utils/useLocalStorageState";

export default function App() {
  const [query, setQuery] = useState("");
  const [selectedID, setSelectedId] = useState(null);

  const { movies, isLoading, error } = useMovies(query);

  const [watched, setWatched] = useLocalStorageState([], "watched");

  function handleSelection(id) {
    setSelectedId((selectedID) => (id === selectedID ? null : id));
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  const handleAddWacthed = (movie) => {
    setWatched((watched) => [...watched, movie]);
    // localStorage.setItem("watched", JSON.stringify([...watched, movie]));
  };

  const handleDeleteWatched = (id) => {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  };

  // useEffect(
  //   function () {
  //     const controller = new AbortController();
  //     async function fetchMovies() {
  //       try {
  //         setIsLoading(true);
  //         setError("");
  //         const res = await fetch(
  //           `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
  //           {
  //             signal: controller.signal,
  //           }
  //         );

  //         if (!res.ok) throw new Error("Something went wrong");
  //         const data = await res.json();
  //         if (data.Response === "False") throw new Error("Movie not found");

  //         setMovies(data.Search);
  //         setError("");
  //       } catch (err) {
  //         if (err.name !== "AbortError") {
  //           setError(err.message);
  //         }
  //       } finally {
  //         setIsLoading(false);
  //       }
  //     }
  //     if (query.length < 3) {
  //       setMovies([]);
  //       setError("");
  //       return;
  //     }

  //     handleCloseMovie();
  //     fetchMovies();

  //     return function () {
  //       controller.abort();
  //     };
  //   },
  //   [query]
  // );

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
              watched={watched}
            />
          ) : (
            <>
              <Summary watched={watched} />
              <WatchedList
                watched={watched}
                onDeleteWatchedMovie={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
