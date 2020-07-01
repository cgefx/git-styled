import styled from 'styled-components';

export const UserInfoStyles = styled.div`
	background-color: ${({ theme }) => theme.backgroundMedium};
	box-shadow: var(--shadow-high);
	display: flex;
	flex: 1;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	padding: 4rem;
	border-radius: var(--border-radius);
`;

export const UserAvatar = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	background: ${({ theme }) => theme.gradient};
	border-radius: 100%;
	height: 120px;
	width: 120px;
	margin-bottom: 1.6em;

	img {
		border-radius: 100%;
		transform: scale(0.95);
	}
`;
export const UserName = styled.h1`
	font-size: 2.2rem;
	margin-bottom: 0rem;
`;

export const UserHandle = styled.h2`
	font-size: 1.8rem;
	color: ${({ theme }) => theme.primary};
`;

export const UserDetails = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	span {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0.5rem;
		white-space: nowrap;

		svg {
			margin-right: 1rem;
		}
	}
`;

export const UserStats = styled.div`
	display: grid;
	grid-template-columns: repeat(3, minmax(10rem, 15rem));
	gap: 0.5rem;
	justify-content: center;
	margin-top: 2rem;

	.stats-item {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		background-color: ${({ theme }) => theme.backgroundLight};
		padding: 0.5rem;
		border-radius: var(--border-radius-small);
		text-align: center;
	}

	.num {
		font-size: 1.5rem;
		color: ${({ theme }) => theme.primary};
	}

	.num-label {
		text-transform: uppercase;
		font-size: 0.75rem;
		letter-spacing: 1px;
		margin-top: 0.25rem;
		color: ${({ theme }) => theme.textSecondary};
	}
`;
