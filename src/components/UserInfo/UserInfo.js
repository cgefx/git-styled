import React from 'react';
import PropTypes from 'prop-types';
import Octicon, { Calendar, Location } from '@primer/octicons-react';


const UserInfo = ({ userData }) => {

  console.log(userData);


  return (

    <div className="user-info">
      <div className="user-info__avatar">
        <img src={userData.avatar_url} alt="avatar" />
      </div>

      <div className="user-info__name">
        <h1>{userData.name}</h1>
      </div>

      <div className="user-info__handle" >
        <h2>@{userData.login}</h2>
      </div>

      <div className="info">
        <span className="info__item">
          <Octicon icon={Location} size="small" />
          {userData.location}
        </span>
        <span className="info__item">
          <Octicon icon={Calendar} size="small" />
          Joined December 1,2018
        </span>
      </div>

      <div className="stats">
        <div className="stats__item">
          <span className="num">11</span>
          <span className="num-label">Repositories</span>
        </div>

        <div className="stats__item">
          <span className="num">11</span>
          <span className="num-label">Followers</span>
        </div>

        <div className="stats__item">
          <span className="num">11</span>
          <span className="num-label">Following</span>
        </div>
      </div>
    </div>
  );
};

UserInfo.propTypes = {
  userData: PropTypes.object.isRequired,
};

export default UserInfo;
