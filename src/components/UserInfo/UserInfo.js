import React from 'react';
import Octicon, { Calendar, Location } from '@primer/octicons-react';
import avatar from '../../assets/img/catprofile.jpg';

const UserInfo = () => {
  return (
    <div className="user-info">
      <div className="user-info__avatar">
        <img src={avatar} alt="avatar" />
      </div>

      <div className="user-info__name">
        <h1>Colin A. Gibson</h1>
      </div>

      <div className="user-info__handle" >
        <h2>@cgefx</h2>
      </div>

      <div className="info">
        <span className="info__item">
          <Octicon icon={Location} size="small" />
          Los Angeles, CA
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

export default UserInfo;
