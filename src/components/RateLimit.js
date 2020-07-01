import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0.5rem;
  margin-right: 2.4rem;
  font-size: 0.75rem;
`

const RateLimit = ({ rateLimit }) => {
  return (
    <StyledContainer>
      You have {rateLimit.remaining} out of {rateLimit.limit} requests left
    </StyledContainer>
  )
}

RateLimit.propTypes = {
  rateLimit: PropTypes.object.isRequired,
}

export default RateLimit
