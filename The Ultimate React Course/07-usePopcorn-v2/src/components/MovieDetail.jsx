import React from "react";

const MovieDetail = ({ selectedID, onCloseMovie }) => {
  return (
    <div className="details">
      <button className="btn-back" onClick={onCloseMovie}>
        &larr;
      </button>
      {selectedID}
    </div>
  );
};

export default MovieDetail;
