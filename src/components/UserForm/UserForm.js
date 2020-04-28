import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Octicon, { MarkGithub } from '@primer/octicons-react';

const UserForm = () => {
	const [username, setUsername] = useState('');
	const history = useHistory();

	const handleChange = e => setUsername(e.target.value);
	const handleSubmit = e => {
		e.preventDefault();
		history.push(`/user/${username}`);
	};

	return (
		<div className='user-form'>
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
					name='username'
					placeholder='type a username...'
					onChange={handleChange}
				/>

				<button className='user-form__button' type='submit'>
					Git Styled!
				</button>
			</form>
		</div>
	);
};

export default UserForm;
