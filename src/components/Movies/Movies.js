import React, { useEffect, useState } from 'react'
import { Box, Button } from '@mui/material';
import { Link, Navigate, Route, Routes } from 'react-router-dom';

import MoviesList from './MoviesList'
// import MovieForm from './MovieForm';
import api from '../../api/cinema-service';
import MovieItem from './MovieItem';

function Movies() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api.get('/movies')
    .then(({ data }) => (data ? setMovies(data) : setMovies([])));
  }, [])

  return (
		<Box className='movie-container'>
			<Button
        variant='contained'
        size='small'
        sx={{
          p: "5px 30px",
          m: "5px",
          backgroundColor: "primary.dark",
          fontSize: "16px" }}
        >
          <Link style={{color: "white"}} to="add">Add</Link>
      </Button>
      <Routes>
        <Route path="/" element={<MoviesList movies={movies}/>}/>
        <Route path=":id" element={<MovieItem/>}/>
        <Route path="add" element={<Navigate to="/movies/add/:id"/>}/>
      </Routes>
		</Box>
  );
}

export default Movies