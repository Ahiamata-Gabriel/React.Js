import React, { useEffect, useState } from "react";
import StarRating from "./StarRating";
import Loading from "./Loading";
const KEY = "73c9dba8";

const MovieDetail = ({ selectedID, onCloseMovie, onAddWatched, watched }) => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState("");

  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedID);

  const watchedUserRating = watched.find(
    (movie) => movie.imdbID === selectedID
  )?.userRating;

  const {
    Title,
    Year,
    Poster,
    Actors,
    Released,
    Runtime,
    Genre,
    Plot,
    imdbRating,
    Director,
  } = movie;

  const handleAdd = () => {
    const newWatchedMovie = {
      imdbID: selectedID,
      Title,
      Year,
      Poster,
      imdbRating: Number(imdbRating),
      Runtime: Number(Runtime.split(" ").at(0)),
      userRating,
    };

    onAddWatched(newWatchedMovie);
    onCloseMovie();
  };

  useEffect(
    function () {
      function callback(e) {
        if (e.code === "Escape") {
          onCloseMovie();
        }
      }

      document.addEventListener("keydown", callback);

      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [onCloseMovie]
  );

  useEffect(
    function () {
      async function getMovieDetails() {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedID}`
        );
        const data = await res.json();
        setMovie(data);
        setIsLoading(false);
      }
      getMovieDetails();
    },
    [selectedID]
  );

  useEffect(() => {
    if (!Title) return;
    document.title = `Movie | ${Title}`;

    return function () {
      document.title = "usePopcorn";
    };
  }, [Title]);

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && (
        <div className="details">
          <header>
            <button className="btn-back" onClick={onCloseMovie}>
              &larr;
            </button>
            <img src={Poster} alt={`poster of ${movie}`} />
            <div className="details-overview">
              <h2>{Title}</h2>
              <p>
                {Released} &bull; {Runtime}
              </p>
              <p>{Genre}</p>
              <p>{imdbRating} IMDb Rating</p>
            </div>
          </header>

          <section>
            <div className="rating">
              {!isWatched ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    onSetRating={setUserRating}
                  />
                  {userRating > 0 && (
                    <button className="btn-add" onClick={handleAdd}>
                      Add to list
                    </button>
                  )}
                </>
              ) : (
                <p>You rated this movie {watchedUserRating}</p>
              )}
            </div>

            <p>
              <em>{Plot}</em>
            </p>
            <p>Starring: {Actors}</p>
            <p>Directed by {Director}</p>
          </section>
        </div>
      )}
    </>
  );
};

export default MovieDetail;
