export const setError = (state, {payload}) => {
	state.isFetching = false;
	state.error = payload;
};
export const setFetching = (state) => {
	state.isFetching = true;
	state.error = null;
};
