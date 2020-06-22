import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import UserInfo from '../components/UserInfo/UserInfo';
import Repos from '../components/Repos/Repos';
import RateLimit from '../components/RateLimit/RateLimit';
import Error from '../components/Error/Error';

const UserPage = (props) => {
	const username = props.match.params.username;
	const [userData, setUserData] = useState(null);
	const [repoData, setRepoData] = useState(null);
	const [rateLimit, setRateLimit] = useState(null);
	const [error, setError] = useState({ active: false, type: 200 });

	// Get user data from API
	const getUserData = () => {
		fetch(`https://api.github.com/users/${username}`)
			.then((response) => {
				if (response.status === 404) {
					return setError({ active: true, type: 404 });
				}
				if (response.status === 403) {
					return setError({ active: true, type: 403 });
				}
				return response.json();
			})
			.then((json) => setUserData(json))
			.catch((error) => {
				setError({ active: true, type: 400 });
				console.error('Error', error);
			});
	};

	// Get user repo data from API
	const getRepoData = () => {
		fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
			.then((response) => {
				if (response.status === 404) {
					return setError({ active: true, type: 404 });
				}
				if (response.status === 403) {
					return setError({ active: true, type: 403 });
				}
				return response.json();
			})
			.then((json) => setRepoData(json))
			.catch((error) => {
				setError({ active: true, type: 200 });
				console.error('Error', error);
			});
	};

	// Get and set current rate limit
	useEffect(() => {
		fetch(
			'https://cors-anywhere.herokuapp.com/https://api.github.com/rate_limit',
		)
			.then((response) => response.json())
			.then((json) => {
				setRateLimit(json.resources.core);
				if (json.resources.core.remaining < 1) {
					setError({
						active: true,
						type: 403,
					});
				}
			});

		//  If no rate limit errors set data...
		getUserData();
		getRepoData();
	}, []);

	return (
		<>
			<Navbar />
			<main>
				{rateLimit && <RateLimit rateLimit={rateLimit} />}

				{error && error.active ? (
					<Error error={error} />
				) : (
					<>
						<section className='section'>
							{userData && <UserInfo userData={userData} />}
						</section>

						<section className='section'>
							{repoData && <Repos repoData={repoData} />}
						</section>
					</>
				)}
			</main>
		</>
	);
};

export default UserPage;
