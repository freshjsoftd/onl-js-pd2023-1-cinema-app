import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import ClearIcon from '@mui/icons-material/Clear';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import moment from 'moment';

import { emptyActor } from '../../constants';
import { createActor, updateActor } from '../../store/slices/actorsSlice';
import MUIDatePicker from '../common/MUIDatePicker';

function ActorForm() {
	const dispatch = useDispatch();
	const actors = useSelector((state) => state.actorsList.actors);

	const { id } = useParams();
	const navigate = useNavigate();

	const currentActor = actors.find((actor) => actor.actor_id === Number(id));

	const schema = Yup.object().shape({
		full_name: Yup.string().trim().required(),
	});

	const goHome = () => navigate('/actors');

	const onActorSubmit = (values) => {
		!values.actor_id
			? dispatch(createActor(values))
			: dispatch(updateActor(values));
	};

	const renderForm = ({ isValid, values }) => {
		// console.log('values', values);
		return (
			<Form id='form'>
				<h1>Actors</h1>
				<Stack className='field-container'>
					<Stack
						direction='row'
						spacing={2}
						sx={{
							bgcolor: 'primary.dark',
							color: 'white',
							pl: '10px',
						}}
					>
						<label htmlFor='full_name' className='label'>
							Full Name
						</label>
						<Field name='full_name' style={{ fontSize: '30px' }} />
					</Stack>
					<ErrorMessage name='full_name'>
						{(msg) => <div className='error'>{msg}</div>}
					</ErrorMessage>
					<Stack
						direction='row'
						spacing={2}
						sx={{
							bgcolor: 'primary.dark',
							color: 'white',
							pl: '10px',
						}}
					>
						<label htmlFor='birth_year' className='label'>
							Birth Year
						</label>
						<Field
							name='birth_year'
							value={moment(values.death_year).format(
								'yyyy-mm-dd'
							)}
						>
							{MUIDatePicker}
						</Field>
					</Stack>
					<ErrorMessage name='birth_year'>
						{(msg) => <div className='error'>{msg}</div>}
					</ErrorMessage>
					<Stack
						direction='row'
						spacing={2}
						sx={{
							bgcolor: 'primary.dark',
							color: 'white',
							pl: '10px',
						}}
					>
						<label htmlFor='death_year' className='label'>
							Death Year
						</label>
						<Field
							name='death_year'
							value={moment(values.death_year).format(
								'yyyy-mm-dd'
							)}
						>
							{MUIDatePicker}
						</Field>
					</Stack>
					<ErrorMessage name='death_year'>
						{(msg) => <div className='error'>{msg}</div>}
					</ErrorMessage>
					<Stack
						direction='row'
						spacing={2}
						sx={{
							bgcolor: 'primary.dark',
							color: 'white',
							pl: '10px',
						}}
					>
						<label htmlFor='nationality' className='label'>
							Nationality
						</label>
						<Field
							name='nationality'
							style={{ fontSize: '30px' }}
						/>
					</Stack>
					<ErrorMessage name='nationality'>
						{(msg) => <div className='error'>{msg}</div>}
					</ErrorMessage>
				</Stack>

				<Stack direction='row' spacing={2} className='field-container'>
					<label htmlFor='foto' className='label'>
						Poster
					</label>
					<Field
						name='foto'
						as='textarea'
						style={{ fontSize: '20px' }}
					></Field>
				</Stack>
				<Stack direction='row' spacing={8} justifyContent='center'>
					<Button
						variant='contained'
						type='submit'
						disabled={!isValid}
						className='form-btn'
						size='small'
						startIcon={<SaveIcon />}
						// style={{ backgroundColor: 'teal' }}
					>
						Save
					</Button>
					<Button
						variant='contained'
						type='button'
						className='form-btn'
						onClick={goHome}
						size='small'
						startIcon={<KeyboardReturnIcon />}
					>
						Return
					</Button>
					<Button
						variant='contained'
						type='reset'
						className='form-btn'
						size='small'
						startIcon={<ClearIcon />}
					>
						Reset
					</Button>
				</Stack>
			</Form>
		);
	};

	return (
		<Formik
			initialValues={currentActor ? currentActor : emptyActor}
			onSubmit={onActorSubmit}
			validationSchema={schema}
		>
			{renderForm}
		</Formik>
	);
}

export default ActorForm;
