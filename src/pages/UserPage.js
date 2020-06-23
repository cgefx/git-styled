import React from 'react';
import {
	Navbar,
	UserInfo,
	Repos,
	RateLimit,
	Error,
	Loading,
} from '../components';
// import Navbar from '../components/Navbar';
// import UserInfo from '../components/UserInfo';
// import Repos from '../components/Repos';
// import RateLimit from '../components/RateLimit';
// import Error from '../components/Error';
// import Loading from '../components/Loading';
import useGithub from '../hooks/useGitHub';

const UserPage = ({ match }) => {
	const username = match.params.username;
	const { userData, repoData, error, isLoading, rateLimit } = useGithub(
		username,
	);

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
							{isLoading ? (
								<Loading text='Loading User' />
							) : (
								userData && <UserInfo userData={userData} />
							)}
						</section>

						<section className='section'>
							{isLoading ? (
								<Loading text='Loading Repos' />
							) : (
								repoData && <Repos repoData={repoData} />
							)}
						</section>
					</>
				)}
			</main>
		</>
	);
};

export default UserPage;
