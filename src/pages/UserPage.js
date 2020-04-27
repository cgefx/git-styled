import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import UserInfo from '../components/UserInfo/UserInfo';
import Charts from '../components/Charts/Charts';
import Repos from '../components/Repos/Repos';
import RateLimit from '../components/RateLimit/RateLimit';
import Error from '../components/Error/Error';
import mockUserData from '../utils/mockUserData';
import mockRepoData from '../utils/mockRepoData';

const UserPage = props => {
	const username = props.match.params.username;
	const [userData, setUserData] = useState(null);
	const [repoData, setRepoData] = useState(null);
	const [rateLimit, setRateLimit] = useState(null);
	const [error, setError] = useState({ active: false, type: 200 });

	useEffect(() => {
		fetch(
			'https://cors-anywhere.herokuapp.com/https://api.github.com/rate_limit',
		)
			.then(response => response.json())
			.then(json => {
				setRateLimit(json.resources.core);
				// error checking here
				if (json.resources.core.remaining < 1) {
					setError({
						active: true,
						type: 403,
					});
				}
			});

		setUserData(mockUserData);
		// setLangData(mockLangData);
		setRepoData(mockRepoData);
	}, []);

	return (
		<>
			<Navbar />
			<main>
				{/* {error && error.active ? <Error error={error} /> : ( */}

				{rateLimit && <RateLimit rateLimit={rateLimit} />}

				<section className='section'>
					<div className='flex-row'>
						{userData && <UserInfo userData={userData} />}
						<Charts />
					</div>
				</section>

				<section className='section'>
					{repoData && <Repos repoData={repoData} />}
				</section>
			</main>
		</>
	);
};

export default UserPage;
