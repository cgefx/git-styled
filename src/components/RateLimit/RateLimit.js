import React from 'react';
import PropTypes from 'prop-types';

const RateLimit = ({ rateLimit }) => {
	return (
		<div className='limit'>
			<div className='limit__number'>
				You have {rateLimit.remaining} out of {rateLimit.limit}{' '}
				requests left
			</div>
		</div>
	);
};

RateLimit.propTypes = {
	rateLimit: PropTypes.object.isRequired,
};

export default RateLimit;
