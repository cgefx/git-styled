import styled from 'styled-components'

export const UserFormStyles = styled.div`
  margin: 6rem auto;
  padding: 6rem 2.4rem;
  max-width: 70rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: ${({ theme }) => theme.backgroundMedium};
  border-radius: var(--border-radius);
  box-shadow: var(shadow-low);

  svg {
    color: ${({ theme }) => theme.primary};
  }

  form {
    background-color: transparent;
    text-align: center;

    label {
      display: block;
      font-size: 1.4rem;
      padding: 2.4rem 4rem;
      font-weight: 500;
      color: ${({ theme }) => theme.textSecondary};
    }
    input {
      background-color: ${({ theme }) => theme.backgroundDark};
      outline: 0;
      border: 0;
      border-radius: 0.25rem;
      width: 80%;
      max-width: 500px;
      margin: 2rem auto;
      padding: 1rem;
      color: ${({ theme }) => theme.textSecondary};
      font-family: 'Open Sans', sans-serif;
      font-size: 1.6rem;
      font-weight: 400;
      text-align: center;
    }

    button {
      background-image: ${({ theme }) => theme.gradient};
      font-family: Monaco;
      font-size: 16px;
      margin: 2rem auto;
      padding: 1rem 3rem;
      border-radius: 0.5rem;

      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 1rem 2rem rgba(var(--color-black), 0.2);

        &::after {
          transform: scaleX(1.4) scaleY(1.6);
          opacity: 0;
        }
      }

      &:active,
      &:focus {
        outline: none;
        transform: translateY(-1px);
        box-shadow: 0 0.5rem 1rem rgba(var(--color-black), 0.2);
      }
    }
  }
`

export const FormContainer = styled.div``
