import { configureStore } from '@reduxjs/toolkit';

import moviesReducer from './slices/moviesSlice';
import actorsReducer from './slices/actorsSlice';


export default configureStore({
	reducer: {
		moviesList: moviesReducer,
		actorsList: actorsReducer,
	},
});