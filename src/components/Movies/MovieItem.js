import React from 'react'

function MovieItem({movie: {title}}) {
  return (
  <div>
    {title}
  </div>)
}

export default MovieItem