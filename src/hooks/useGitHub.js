import { useEffect, useState } from 'react';

function useGithub(username) {
	const [userData, setUserData] = useState(null);
	const [repoData, setRepoData] = useState(null);
	const [rateLimit, setRateLimit] = useState(null);
	const [error, setError] = useState({ active: false, type: 200 });
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const getRateLimit = () => {
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
		};
		getRateLimit();
	}, []);

	useEffect(() => {
		const getUserData = () => {
			setIsLoading(true);
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
				.then((json) => {
					setUserData(json);
					setIsLoading(false);
				})
				.catch((error) => {
					setError({ active: true, type: 400 });
					console.error('Error', error);
				});
		};

		const getRepoData = () => {
			setIsLoading(true);
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
				.then((json) => {
					setRepoData(json);
					setIsLoading(false);
				})
				.catch((error) => {
					setError({ active: true, type: 200 });
					console.error('Error', error);
				});
		};

		getUserData();
		getRepoData();
	}, [username]);

	return { userData, repoData, error, isLoading, rateLimit };
}

export default useGithub;
