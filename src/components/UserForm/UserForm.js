import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Octicon, { MarkGithub } from '@primer/octicons-react';

const UserForm = () => {
  const [username, setUsername] = useState('');
  const history = useHistory();

  const handleChange = e => setUsername(e.target.value);
  const handleSubmit = () => history.push(`/user/${username}`);

  return (
    <div className="user-form">
      <div className="icon-wrapper">
        <Octicon icon={MarkGithub} size="large" />
      </div>

      <form
        className="user-form__form"
        onSubmit={handleSubmit}
      >
        <label htmlFor="username">
          Github is kinda boring.
          Let's style your
          profile
      </label>

        <input
          type="text"
          name="query"
          placeholder="type a username..."
          onChange={handleChange}
        />

        <button
          className="user-form__button"
          type="submit">
          Git Styled!
      </button>

      </form>
    </div>
  );
};

export default UserForm;
