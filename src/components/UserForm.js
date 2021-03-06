import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Octicon, { MarkGithub } from '@primer/octicons-react'
import { UserFormStyles, FormContainer } from './style'

const UserForm = () => {
  const [username, setUsername] = useState('')
  const history = useHistory()

  const handleChange = (e) => setUsername(e.target.value)
  const handleSubmit = (e) => {
    e.preventDefault()
    history.push(`/user/${username}`)
  }

  return (
    <FormContainer>
      <UserFormStyles>
        <Octicon icon={MarkGithub} size="large" />
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">
            Get a styled version of your Github profile...
          </label>

          <input
            type="text"
            id="username"
            value={username}
            placeholder="Type a username..."
            onChange={handleChange}
          />

          <button disabled={username.length === 0}>Git Styled!</button>
        </form>
      </UserFormStyles>
    </FormContainer>
  )
}

export default UserForm
