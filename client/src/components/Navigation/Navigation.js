import React from 'react'
import './Navigation.css'

function Navigation() {
  return (
		<div className='nav-container'>
			<ul>
				<li>
					<a href='http://localhost:5000/movies'>Movies</a>
				</li>
				<li>
					<a href='http://localhost:5000/actors'>Actors</a>
				</li>
				<li>
					<a href='http://localhost:5000/directors'>Directors</a>
				</li>
				<li>
					<a href='http://localhost:5000/studios'>Stidios</a>
				</li>
			</ul>
		</div>
  );
}

export default Navigation