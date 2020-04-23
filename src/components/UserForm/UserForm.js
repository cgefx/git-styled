import React from 'react';
import Octicon, { MarkGithub } from '@primer/octicons-react';

const UserForm = () => {
  return (
    <div class="user-form">
      <Octicon icon={MarkGithub} size="large" />

      <form class="user-form__form">
        <label htmlFor="username">
          Github is kinda boring.
          Let's style your
          profile
      </label>

        <input
          type="text"
          name="username"
          id="username"
          placeholder="type a username..." />

        <button
          class="user-form__button"
          type="submit">
          Git Styled!
      </button>

      </form>
    </div>
  );
};

export default UserForm;
