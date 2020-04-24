import React from 'react';
import PropTypes from 'prop-types';
import Octicon, { Calendar, Location } from '@primer/octicons-react';


const UserInfo = ({ userData }) => (
  <>
    {userData && (
      <div className="user-info">
        {userData.avatar_url && (
          <div className="user-info__avatar">
            <img src={userData.avatar_url} alt="avatar" />
          </div>
        )}

        {userData.name && (
          <div className="user-info__name">
            <h1>{userData.name}</h1>
          </div>
        )}

        {userData.login && (
          <div className="user-info__handle" >
            <h2>
              <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
                @{userData.login}
              </a>
            </h2>
          </div>
        )}

        <div className="info">
          {userData.location && (
            <span className="info__item">
              <Octicon icon={Location} size="small" />
              {userData.location}
            </span>
          )}

          {userData.created_at && (
            <span className="info__item">
              <Octicon icon={Calendar} size="small" />
                  Joined {' '}
              {new Date(userData.created_at).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}
            </span>
          )}
        </div>

        <div className="stats">
          <div className="stats__item">
            <span className="num">{userData.public_repos.toString()}</span>
            <span className="num-label">Repositories</span>
          </div>

          <div className="stats__item">
            <span className="num">{userData.followers}</span>
            <span className="num-label">Followers</span>
          </div>

          <div className="stats__item">
            <span className="num">{userData.following}</span>
            <span className="num-label">Following</span>
          </div>
        </div>
      </div>
    )}
  </>
);

UserInfo.propTypes = {
  userData: PropTypes.object.isRequired,
};

export default UserInfo;
