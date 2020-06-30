import React from 'react'
import { match } from 'sinon'

const MovieShow = props => {
    return (
        <div>
            <h3>{props.movies[props.match.params.movieId].title}</h3>
        </div>
    )
}

export default MovieShow


