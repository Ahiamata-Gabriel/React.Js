import React, { useEffect, useState } from "react";
import StarRating from "./StarRating";
import Loading from "./Loading";
const KEY = "73c9dba8";

const MovieDetail = ({ selectedID, onCloseMovie, onAddWatched }) => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);

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
      Runtime: Number(Runtime.split("").at(0)),
    };

    onAddWatched(newWatchedMovie);
  };

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
              <StarRating maxRating={10} size={24} />
              <button className="btn-add" onClick={handleAdd}>
                Add
              </button>
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
