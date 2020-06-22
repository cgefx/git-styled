import styled from 'styled-components';

export const UserFormStyles = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	padding: 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	background-color: ${({ theme }) => theme.backgroundMedium};
	border-radius: var(--border-radius);
	box-shadow: var(shadow-low);

	form {
		background-color: transparent;
		text-align: center;
		svg {
			color: ${({ theme }) => theme.primary};
			margin-bottom: 1rem;
		}
		label {
			display: block;
			font-size: 1rem;
			font-weight: 500;
			margin: 2rem;
		}
		input {
			background-color: ${({ theme }) => theme.backgroundDark};
			outline: 0;
			border: 0;
			border-radius: 0.25rem;
			width: 80%;
			max-width: 500px;
			margin: 2rem auto;
			padding: 1rem;
			color: ${({ theme }) => theme.textSecondary};
			font-family: 'Open Sans', sans-serif;
			font-size: 2rem;
			font-weight: 400;
			text-align: center;
		}

		button {
			background-image: ${({ theme }) => theme.gradient};
			font-family: Monaco;
			font-size: 16px;
			margin: 2rem auto;
			color: #000000;
			padding: 1rem 3rem;
			border-radius: 0.5rem;
		}
	}
`;

export default UserFormStyles;
