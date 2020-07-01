import styled from 'styled-components'

export const ErrorStyles = styled.div`
  margin: 6rem auto;
  padding: 4.8rem;
  max-width: 40rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: ${({ theme }) => theme.backgroundMedium};
  border-radius: var(--border-radius);
  box-shadow: var(shadow-low);

  p {
    font-size: 2.4rem;
  }
`
