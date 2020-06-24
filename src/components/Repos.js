import React, { useState, useEffect } from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';
import { langColors } from '../utils';
import { ReposHeader, RepoGrid } from './styles/RepoStyles';
import { DropdownStyles } from './styles/DropdownStyles';
import Octicon, {
	Repo,
	Star,
	RepoForked,
	TriangleDown,
} from '@primer/octicons-react';

const Repos = ({ repoData }) => {
	const [topRepos, setTopRepos] = useState([]);
	const [dropdownOpen, setDropdown] = useState(false);
	const [sortType, setSortType] = useState('stars');

	useEffect(() => {
		const getTopRepos = (type) => {
			const LIMIT = 8;

			const map = {
				stars: 'stargazers_count',
				updated: 'pushed_at',
				size: 'size',
			};

			const sortProperty = map[type];

			const sorted = repoData
				.filter((repo) => !repo.fork)
				.sort((a, b) =>
					sortProperty === 'pushed_at'
						? Date.parse(b[sortProperty]) - Date.parse(a[sortProperty])
						: b[sortProperty] - a[sortProperty],
				)
				.slice(0, LIMIT);

			setTopRepos(sorted);
		};

		getTopRepos(sortType);
	}, [repoData, sortType]);

	const toggleDropdown = () => setDropdown(!dropdownOpen);

	const changeRepoSort = (sortType) => {
		setSortType(sortType);
		toggleDropdown();
	};

	const sortTypes = ['stars', 'updated', 'size'];

	return (
		<div>
			<ReposHeader>
				<h2>Top Repos</h2>
				<DropdownStyles>
					<span>by</span>
					<div className='dropdown'>
						<button
							className='dropdown__button'
							onClick={() => toggleDropdown()}
						>
							<label>{sortType}</label>
							<div
								className='dropdown__icon'
								style={{ transform: dropdownOpen ? 'rotate(0.5turn)' : null }}
							>
								<Octicon icon={TriangleDown} />
							</div>
						</button>

						{dropdownOpen && (
							<ul className='dropdown__list'>
								{sortTypes.map((type, index) => (
									<li className='dropdown__list-item' key={index}>
										<button onClick={() => changeRepoSort(type)}>{type}</button>
									</li>
								))}
							</ul>
						)}
					</div>
				</DropdownStyles>
			</ReposHeader>

			<Flipper
				flipKey={topRepos}
				spring='veryGentle'
				staggerConfig={{
					default: {
						reverse: false,
						speed: 1,
					},
				}}
			>
				<RepoGrid>
					{topRepos.length > 0 ? (
						<ul>
							{topRepos.map((repo) => (
								<Flipped key={repo.id} flipId={repo.id} stagger>
									<li>
										<Flipped inverseFlipId={repo.id} scale>
											<a
												href={repo.html_url}
												target='_blank'
												rel='noopener noreferrer'
												className='repo'
											>
												<div className='repo__top'>
													<div className='repo__name'>
														<Octicon icon={Repo} />
														<h3>{repo.name}</h3>
													</div>
													<p>{repo.description}</p>
												</div>
												<div className='repo__stats'>
													<div className='repo__stats--left'>
														<span>
															<div
																className='language'
																style={{
																	backgroundColor: langColors[repo.language],
																}}
															/>
															{repo.language}
														</span>
														<span>
															<Octicon icon={Star} />
															{repo.stargazers_count}
														</span>
														<span>
															<Octicon icon={RepoForked} />
															{repo.forks}
														</span>
													</div>
													<div className='repo__stats--right'>
														<span>{repo.size} KB </span>
													</div>
												</div>
											</a>
										</Flipped>
									</li>
								</Flipped>
							))}
						</ul>
					) : (
						<p>Looks like there aren't any repos to show</p>
					)}
				</RepoGrid>
			</Flipper>
		</div>
	);
};

export default Repos;
