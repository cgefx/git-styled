import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Octicon, { MarkGithub } from '@primer/octicons-react';
import UserFormStyles from './UserFormStyles';

const UserForm = () => {
	const [username, setUsername] = useState('');
	const history = useHistory();

	const handleChange = (e) => setUsername(e.target.value);
	const handleSubmit = (e) => {
		e.preventDefault();
		history.push(`/user/${username}`);
	};

	return (
		<UserFormStyles>
			<div className='icon-wrapper'>
				<Octicon icon={MarkGithub} size='large' />
			</div>

			<form className='user-form__form' onSubmit={handleSubmit}>
				<label htmlFor='username'>
					Get a styled version of your Github profile...
				</label>

				<input
					type='text'
					id='username'
					value={username}
					placeholder='type a username...'
					onChange={handleChange}
				/>

				<button className='user-form__button' type='submit'>
					Git Styled!
				</button>
			</form>
		</UserFormStyles>
	);
};

export default UserForm;
