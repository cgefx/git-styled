import styled from 'styled-components';

const NavbarStyles = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.7rem 2.4rem;
	margin-bottom: 0.5rem;
	width: 100%;
	border-bottom: solid 1px ${({ theme }) => theme.primary};
	opacity: 0.9;

	h1 {
		font-size: 2rem;
	}

	ul {
		display: flex;
	}

	a {
		color: #fff;
		padding: 0.45rem;
		margin: 0 0.25rem;
		font-family: 'Space Mono';

		&:hover {
			color: ${({ theme }) => theme.primary};
		}
	}
`;

export default NavbarStyles;
