import React from "react";
import WatchedMovie from "./WatchedMovie";

const WatchedList = ({ watched, onDeleteWatchedMovie }) => {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
          onDeleteWatchedMovie={onDeleteWatchedMovie}
        />
      ))}
    </ul>
  );
};

export default WatchedList;
