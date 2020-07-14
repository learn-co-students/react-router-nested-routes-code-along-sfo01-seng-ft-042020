import React from 'react'
import {Link} from 'react-router-dom'

const MoviesList = ({movies}) => {
  const renderMovies = Object.keys(movies).map((movieID) =>
    <Link key={movieID} to={`/movies/${movieID}`}>{movies[movieID].title}</Link>
  )
  return (
      <div>
        <ul>
          {renderMovies.map((m) => (
            <li>{m}</li>
          ))}
        </ul>
      </div>
  )
}

export default MoviesList;