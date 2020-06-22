import React from 'react';
import styled from 'styled-components';

const ErrorStyles = styled.div`
	margin: 6rem auto;
	padding: 4.8rem;
	max-width: 40rem;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	background-color: ${({ theme }) => theme.backgroundMedium};
	border-radius: var(--border-radius);
	box-shadow: var(shadow-low);

	p {
		font-size: 2.4rem;
	}
`;

const Error = ({ error }) => {
	return (
		error && (
			<div>
				<ErrorStyles>
					{error.type === 403 ? (
						<p>
							Looks like you hit the{' '}
							<a
								href='https://developer.github.com/v3/rate_limit/'
								target='_blank'
								rel='noopener noreferrer'
							>
								rate limit
							</a>
							! Try again later.
						</p>
					) : error.type === 404 ? (
						<p>User not found!</p>
					) : (
						<p>Something went wrong. Try again later!</p>
					)}
				</ErrorStyles>
			</div>
		)
	);
};

export default Error;
