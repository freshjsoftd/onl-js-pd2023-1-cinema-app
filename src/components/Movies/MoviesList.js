import React from 'react'
import MovieItem from './MovieItem';

function MoviesList({movies}) {
  return <div className='movie-list-container'>
    {movies.map((movie) => {
      return (
        <MovieItem 
          key={movie.id}
          movie={movie}
        />
      )
  })}
  </div>;
}

export default MoviesList