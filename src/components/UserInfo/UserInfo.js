import React from 'react';

const UserInfo = () => {
  return (
    <div className="user-info">
      <div className="user-info__avatar">
        <img src="./img/catprofile.jpg" alt="avatar" />
      </div>

      <div className="user-info__name">
        <h1>Colin A. Gibson</h1>
      </div>

      <div className="user-info__handle" >
        <h2>@cgefx</h2>
      </div>

      <div className="info">
        <span className="info__item">
          Los Angeles, CA
        </span>
        <span className="info__item">
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
