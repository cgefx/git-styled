import React from 'react';
import ErrorStyles from './styles/ErrorStyles';

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
