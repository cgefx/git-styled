import React from 'react';
import { Link } from 'react-router-dom';
import NavbarStyles from './styles/NavbarStyles';

const Navbar = () => {
	return (
		<NavbarStyles>
			<h1>
				<Link to='/'>gitStyled</Link>
			</h1>
			<ul>
				<li>
					<Link to='/about'>About</Link>
				</li>
			</ul>
		</NavbarStyles>
	);
};

export default Navbar;
