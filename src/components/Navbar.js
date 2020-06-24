import React from 'react';
import { NavLink } from 'react-router-dom';
import NavbarStyles from './styles/NavbarStyles';

const Navbar = () => {
	return (
		<NavbarStyles>
			<NavLink to='/'>
				<h1>gitStyled</h1>
			</NavLink>

			<ul>
				<li>
					<a
						href='https://github.com/cgefx/git-styled'
						target='_blank'
						rel='noopener noreferrer'
					>
						Github
					</a>
				</li>
			</ul>
		</NavbarStyles>
	);
};

export default Navbar;
