import React, { useEffect } from 'react'
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button } from '@mui/material';

import { getAllMovies } from '../../store/slices/moviesSlice'
import MoviesList from './MoviesList'
import MovieItem from './MovieItem';

function Movies() {

  // const [movies, setMovies] = useState([]);
  const movies = useSelector(state => state.moviesList.movies);
  const dispatch = useDispatch();

  console.log(movies)

  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch])

  return (
		<Box className='movie-container'>
			<Button
				variant='contained'
				size='small'
				sx={{
					p: '5px 30px',
					m: '5px',
					backgroundColor: 'primary.dark',
					fontSize: '16px',
				}}
			>
				<Link style={{ color: 'white' }} to='add'>
					Add
				</Link>
			</Button>
			<Routes>
				<Route path='/' element={<MoviesList movies={movies} />} />
				<Route path=':id' element={<MovieItem />} />
				<Route path='add' element={<Navigate to='/movies/add/:id' />} />
			</Routes>
		</Box>
  );
}

export default Movies