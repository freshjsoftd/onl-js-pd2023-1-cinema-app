import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Grid, Stack } from '@mui/material';

import { emptyActor } from '../../constants';

function ActorItem() {

  const actors = useSelector((state) => state.actorsList.actors);

  const { id } = useParams();

  const star = actors.find((actor) => actor.actor_id === Number(id));
  console.log(star);
  const actor = star ? star : emptyActor;

  return (
		<Grid container>
			<Grid
				item
				lg={12}
				md={12}
				xl={12}
				sm={12}
				xs={12}
				className='movie-header'
			>
				<h1>{actor.full_name}</h1>
			</Grid>
			<Grid item lg={6} md={6} xl={6} sm={6} xs={6}>
				<img src={actor.foto} alt='poster' className='item-img' />
			</Grid>
			<Grid item lg={6} md={6} xl={6} sm={6} xs={6}>
				<Stack>
					<h2>Actor definition</h2>
					<p>{actor.full_name}</p>
					<h3>Birth Year</h3>
					{actor.birth_year}
					{/* <h3>Directors</h3>
					{movie.producers.map((producer, index) => (
						<p key={index}>{producer}</p>
					))}
					<h3>Studios</h3>
					{movie.companies.map((company, index) => (
						<p key={index}>{company}</p>
					))} */}
				</Stack>
			</Grid>
		</Grid>
  );
}

export default ActorItem