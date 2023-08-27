import React from 'react';
// import MovieItem from './MovieItem';
import { Box, Button, ButtonGroup, List, ListItem, Stack } from '@mui/material';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import { Link } from 'react-router-dom';

function MoviesList({ movies }) {
	return (
		<Box className='movie-list-container'>
			<List>
				{movies.map((movie) => {
					return (
						<Stack key={movie.id} direction='row'>
							<ListItem>
								<Link to={`${movie.id}`}>{movie.title}</Link>
							</ListItem>
							<ButtonGroup>
								<Button startIcon={<EditRoundedIcon />}>
									<Link to={`add/${movie.id}`}>Edit</Link>
								</Button>
								<Button
									startIcon={<DeleteForeverRoundedIcon 
                  onClick={() =>{}}
                  />}
								>
									<Link to={`add/${movie.id}`}>Del</Link>
								</Button>
							</ButtonGroup>
						</Stack>
					);
				})}
			</List>
		</Box>
	);
}

export default MoviesList;
