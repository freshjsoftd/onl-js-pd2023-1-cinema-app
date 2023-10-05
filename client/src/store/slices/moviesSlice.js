import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import api from '../../api/cinema-service';
import { setFetching, setError } from '../../reducers-service';

const SLICE_NAME = 'movies';
const initialState = {
  movies: [],
  isFetching: false,
  error: null
}

export const getAllMovies = createAsyncThunk(
	`${SLICE_NAME}/getAllMovies`,
	async function (_, { rejectWithValue }) {
		try {
			const { data, status } = await api.get(`/${SLICE_NAME}`);
			console.log(status);
			return data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const createMovie = createAsyncThunk(
  `${SLICE_NAME}/createMovie`,
  async function(newMovie, {rejectWithValue}){
    try {
      const {data} = await api.post(`/${SLICE_NAME}`, newMovie);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
)
export const updateMovie = createAsyncThunk(
	`${SLICE_NAME}/updateMovie`,
	async function (changedMovie, { rejectWithValue }) {
		try {
			const { data } = await api.put(
        `/${SLICE_NAME}/${changedMovie.id}`, 
        changedMovie);
			return data;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);
export const deleteMovie = createAsyncThunk(
	`${SLICE_NAME}/deleteMovie`,
	async function (id, { rejectWithValue }) {
		try {
			await api.delete(`/${SLICE_NAME}/${id}`);
			return id;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);



const moviesSlice = createSlice({
	name: SLICE_NAME,
	initialState,
	redusers: {},
	extraReducers: {
		[getAllMovies.fulfilled]: (state, {payload}) => {
			state.movies = payload;
			state.error = null;
			state.isFetching = false;
		},
    [createMovie.fulfilled]: (state, {payload}) => {
      state.movies.push(payload);
      state.error = null;
      state.isFetching = false;
    },
		[updateMovie.fulfilled]: (state, {payload}) => {
			state.movies = state.movies.map((movie) =>
				movie.id === payload.id ? payload : movie
			);
			state.error = null;
			state.isFetching = false;
		},
		[deleteMovie.fulfilled]: (state, {payload}) => {
			state.movies = state.movies.filter(movie => movie.id !== payload)
			state.error = null;
			state.isFetching = false;
		},

		[getAllMovies.rejected]: setError,
		[createMovie.rejected]: setError,
		[updateMovie.rejected]: setError,
		[deleteMovie.rejected]: setError,

		[getAllMovies.pending]: setFetching,
		[createMovie.pending]: setFetching,
		[updateMovie.pending]: setFetching,
		[deleteMovie.pending]: setFetching,
	},
});

export default moviesSlice.reducer;