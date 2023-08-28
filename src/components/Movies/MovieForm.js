import { emptyMovie } from '../../constants';
import {
	createMovie,
	updateMovie,
} from '../../store/slices/moviesSlice';
// import CreateMovieField from './CreateMovieField'
// ================================
import React from 'react';
import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import ClearIcon from '@mui/icons-material/Clear';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function MovieForm() {
	const dispatch = useDispatch();
	const {
		moviesList: { movies },
		/* actorsList: { actors },
		directorsList: { directors }, */
	} = useSelector((state) => state);

	const { id } = useParams();
	const navigate = useNavigate();
	// console.log('actors',actors)
	// console.log('movies',movies)
	// console.log('directors', directors)

	const currentMovie = movies.find((movies) => movies.id === parseInt(id));

	const schema = Yup.object().shape({
		title: Yup.string().required('Title is required'),
	});

	const goHome = () => navigate('/movies');

	const onMovieSubmit = (values) => {
		!values.id
			? dispatch(createMovie(values))
			: dispatch(updateMovie(values));
	};

	const renderForm = ({ isValid }) => {
		// console.log('props', props);
		return (
			<Form id='form'>
				<h1>Movies</h1>
				<Stack className='field-container'>
					<Stack
						direction='row'
						spacing={2}
						sx={{ bgcolor: 'aquamarine' }}
					>
						<label htmlFor='title' className='label'>
							Title
						</label>
						<Field name='title' />
					</Stack>
					<ErrorMessage name='title'>
						{(msg) => <div className='error'>{msg}</div>}
					</ErrorMessage>
				</Stack>
				<fieldset className='items-container'>
					<legend>Actors</legend>
					<FieldArray name='stars'>
						{(fieldArrayProps) => {
							console.log('fieldArrayProps', fieldArrayProps);
							const { push, remove, form } = fieldArrayProps;
							const { values } = form;
							const { stars } = values;
							return (
								<Stack spacing={2}>
									{stars.map((star, index) => (
										<Stack
											direction='row'
											key={index}
											spacing={2}
										>
											<Field
												name={`stars[${index}]`}
												as='select'
											>
												<option value={star}>
													{star}
												</option>
												{/* {actors.map((actor) => (
													<option
														key={actor.id}
														value={actor.fullName}
													>
														{actor.fullName}
													</option>
												))} */}
											</Field>
											{index > 0 && (
												<Button
													type='button'
													variant='contained'
													size='small'
													startIcon={<RemoveIcon />}
													onClick={() =>
														remove(index)
													}
												></Button>
											)}
											<Button
												variant='contained'
												size='small'
												type='button'
												startIcon={<AddIcon />}
												onClick={() => push('')}
											></Button>
										</Stack>
									))}
								</Stack>
							);
						}}
					</FieldArray>
				</fieldset>
				<fieldset className='items-container'>
					<legend>Directors</legend>
					<FieldArray name='producers'>
						{({
							push,
							remove,
							form: {
								values: { producers },
							},
						}) => {
							return (
								<Stack spacing={2}>
									{producers.map((producer, index) => (
										<Stack
											key={index}
											direction='row'
											spacing={2}
										>
											<Field
												name={`producers[${index}]`}
												as='select'
											>
												<option value={producer}>
													{producer}
												</option>
												{/* {directors.map((director) => (
													<option
														key={director.id}
														value={
															director.fullName
														}
													>
														{director.fullName}
													</option>
												))} */}
											</Field>
											{index > 0 && (
												<Button
													type='button'
													variant='contained'
													size='small'
													startIcon={<RemoveIcon />}
													onClick={() =>
														remove(index)
													}
												></Button>
											)}
											<Button
												variant='contained'
												size='small'
												type='button'
												startIcon={<AddIcon />}
												onClick={() => push('')}
											></Button>
										</Stack>
									))}
								</Stack>
							);
						}}
					</FieldArray>
				</fieldset>
				<fieldset className='items-container'>
					<legend>Studios</legend>
					<FieldArray name='companies'>
						{({ push, remove, form: { values } }) => {
							const { companies } = values;
							return (
								<Stack spacing={2}>
									{companies.map((company, index) => (
										<Stack
											key={index}
											direction='row'
											spacing={2}
										>
											<Field
												name={`companies[${index}]`}
											/>
											{index > 0 && (
												<Button
													type='button'
													variant='contained'
													size='small'
													startIcon={<RemoveIcon />}
													onClick={() =>
														remove(index)
													}
												></Button>
											)}
											<Button
												variant='contained'
												size='small'
												type='button'
												startIcon={<AddIcon />}
												onClick={() => push('')}
											></Button>
										</Stack>
									))}
								</Stack>
							);
						}}
					</FieldArray>
				</fieldset>
				<Stack direction='row' spacing={2} className='field-container'>
					<label htmlFor='poster' className='label'>
						Poster
					</label>
					<Field name='poster' as='textarea'></Field>
				</Stack>
				<Stack direction='row' spacing={8} justifyContent='center'>
					<Button
						variant='contained'
						type='submit'
						disabled={!isValid}
						className='form-btn'
						size='large'
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
						size='large'
						startIcon={<KeyboardReturnIcon />}
					>
						Return
					</Button>
					<Button
						variant='contained'
						type='reset'
						className='form-btn'
						size='large'
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
			initialValues={currentMovie ? currentMovie : emptyMovie}
			onSubmit={onMovieSubmit}
			validationSchema={schema}
		>
			{renderForm}
		</Formik>
	);
}

export default MovieForm;
