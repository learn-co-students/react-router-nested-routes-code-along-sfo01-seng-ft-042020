import React from "react";
import { Link } from "react-router-dom";

const MoviesList = ({ movies }) => {
  console.log(movies);

  const renderMoves = Object.keys(movies).map((id) => (
    <Link key={id} to={`/movies/${id}`}>
      {movies[id].title}
    </Link>
  ));

  return <div>{renderMoves}</div>;
};

export default MoviesList;
