import React, { useEffect, useState } from 'react'
import MoviesList from './MoviesList'
import MovieForm from './MovieForm';
import api from '../../api/cinema-service';

function Movies() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api.get('/movies')
    .then(({ data }) => (data ? setMovies(data) : setMovies([])));
  }, [])

  return (
		<div className='movie-container'>
			<MoviesList movies={movies} />
      <MovieForm />
		</div>
  );
}

export default Movies