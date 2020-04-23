import React, { useState } from 'react';
import Octicon, { Repo, Star, RepoForked, TriangleDown } from '@primer/octicons-react';

const Repos = () => {

  const [dropdownOpen, setDropdown] = useState(false);

  const [sortType, setSortType] = useState('stars');


  const toggleDropdown = () => setDropdown(!dropdownOpen);

  const changeRepoSort = sortType => {
    setSortType(sortType);
    toggleDropdown();
  };

  const sortTypes = ['stars', 'forks', 'size'];

  return (
    <div className="repos">
      <header className="header">
        <h2>Top Repos</h2>
        <div className="dropdown-wrapper" >
          <span className="label">by</span>
          <div className="dropdown">

            <button className="dropdown__button" onClick={() => toggleDropdown()}>
              <label>{sortType}</label>
              <Octicon icon={TriangleDown} />
            </button>

            {dropdownOpen &&
              <ul className="dropdown__list" >
                {sortTypes.map((type, index) => (
                  <li className="dropdown__list-item" key={index}>
                    <button onClick={() => changeRepoSort(type)}>{type}</button>
                  </li>
                ))}
              </ul>
            }

          </div>
        </div>
      </header>

      <div className="repo-list">
        <ul>
          <li>
            <a href="!#" target="_blank" rel="noopener noreferrer" className="repo" >
              <div className="repo__top"  >
                <div className="repo__name" >
                  <div className="icon-wrapper">
                    <Octicon icon={Repo} />
                  </div>

                  <h3>crwn-clothing</h3>
                </div>
                <p> Repo description </p>
              </div>
              <div className="repo__stats" >
                <div className="repo__stats--left" >
                  <span>
                    <div className="language" ></div>
                    Javascript
                  </span>
                  <span>
                    <Octicon icon={Star} />
                    0
                  </span>
                  <span>
                    <Octicon icon={RepoForked} />
                    0
                  </span>
                </div>
                <div className="repo__stats--right">
                  <span>1234 KB  </span>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Repos;
