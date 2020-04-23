import React from 'react';

const Repos = () => {
  return (

    <div className="repos">
      <header className="header">
        <h2>Top Repos</h2>
        <div className="dropdown-wrapper" >
          <span className="label">by</span>
          <div className="dropdown">

            <button className="dropdown__button">
              <label>stars</label>
              {/* <svg className="octicon"></svg> */}
            </button>

            <ul className="dropdown__list" >
              <li className="dropdown__list-item" >
                <button>
                  stars
                </button>
              </li>
              <li className="dropdown__list-item" >
                <button>
                  forks
                </button>
              </li>
              <li className="dropdown__list-item" >
                <button>
                  size
                </button>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <div className="repo-list">
        <ul>
          <li>
            <a href="!#" target="_blank" rel="noopener noreferrer" className="repo" >
              <div className="repo__top"  >
                <div className="repo__name" >
                  {/* <svg className="octicon"></svg> */}
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
                    {/* <svg className="octicon"  ></svg> */}
                    0
                  </span>
                  <span>
                    {/* <svg className="octicon" ></svg> */}
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
