import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Box, Button, ButtonGroup, List, ListItem, Stack } from '@mui/material';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

import { deleteActor } from '../../store/slices/actorsSlice';

function ActorsList({ actors }) {

	const dispatch = useDispatch();

	const onDelete = (id) => {
		dispatch(deleteActor(id));
	}

	return (
		<Box className='movie-list-container'>
			<List>
				{actors.map((actor) => {
					return (
						<Stack key={actor.actorId} direction='row'>
							<ListItem>
								<Link to={`${actor.actorId}`}>{actor.full_name}</Link>
							</ListItem>
							<ButtonGroup>
								<Button startIcon={<EditRoundedIcon />}>
									<Link to={`add/${actor.actorId}`}>Edit</Link>
								</Button>
								<Button
									onClick={() => onDelete(actor.actorId)}
									startIcon={
										<DeleteForeverRoundedIcon	/>
									}
								>
									Del
								</Button>
							</ButtonGroup>
						</Stack>
					);
				})}
			</List>
		</Box>
	);
}

export default ActorsList;