import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function MovieItem() {

  const movies = useSelector((state) => state.moviesList.movies);

  return (
  <div>
    {/* {title} */}
  </div>)
}

export default MovieItem