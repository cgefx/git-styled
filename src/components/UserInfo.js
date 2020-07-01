import React from 'react'
import PropTypes from 'prop-types'
import Octicon, { Calendar, Location } from '@primer/octicons-react'
import {
  UserInfoStyles,
  UserAvatar,
  UserName,
  UserHandle,
  UserDetails,
  UserStats,
} from './style/UserInfoStyles'

const UserInfo = ({ userData }) => (
  <>
    {userData && (
      <UserInfoStyles>
        {userData.avatar_url && (
          <UserAvatar>
            <img src={userData.avatar_url} alt="avatar" />
          </UserAvatar>
        )}

        {userData.name && <UserName>{userData.name}</UserName>}

        {userData.login && (
          <UserHandle>
            <a
              href={userData.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              @{userData.login}
            </a>
          </UserHandle>
        )}

        <UserDetails>
          {userData.location && (
            <span>
              <Octicon icon={Location} size="small" />
              {userData.location}
            </span>
          )}

          {userData.created_at && (
            <span>
              <Octicon icon={Calendar} size="small" />
              Joined{' '}
              {new Date(userData.created_at).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
          )}
        </UserDetails>

        <UserStats>
          <div className="stats-item">
            <span className="num">{userData.public_repos.toString()}</span>
            <span className="num-label">Repositories</span>
          </div>

          <div className="stats-item">
            <span className="num">{userData.followers}</span>
            <span className="num-label">Followers</span>
          </div>

          <div className="stats-item">
            <span className="num">{userData.following}</span>
            <span className="num-label">Following</span>
          </div>
        </UserStats>
      </UserInfoStyles>
    )}
  </>
)

UserInfo.propTypes = {
  userData: PropTypes.object.isRequired,
}

export default UserInfo
