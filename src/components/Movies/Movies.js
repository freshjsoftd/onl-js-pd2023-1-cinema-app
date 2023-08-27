import React, { useEffect, useState } from 'react'
import MoviesList from './MoviesList'
import MovieForm from './MovieForm';
import api from '../../api/cinema-service';
import { Box } from '@mui/material';

function Movies() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api.get('/movies')
    .then(({ data }) => (data ? setMovies(data) : setMovies([])));
  }, [])

  return (
		<Box className='movie-container'>
			<MoviesList movies={movies} />
      <MovieForm />
		</Box>
  );
}

export default Movies