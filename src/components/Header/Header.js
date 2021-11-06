import React from 'react'
import PropTypes from 'prop-types'

import Button from '../Button/Button'
import { Container } from './styles'

export const Header = ({ user, loading, loginUser, logOutUser }) => {
  return (
    <Container>
      <div className='logo-brand'>
        <h3>ApeNet Logo</h3>
      </div>

      <div className='header-cta'>
        {
          user ? (
            <Button
              primary
              label='Connect Wallet'
              onClick={loginUser}
              loading={loading}
            />
          ) : (
            <Button
              label='Disconnect Wallet'
              onClick={logOutUser}
              loading={loading}
            />
          )
        }
      </div>
    </Container>
  )
}

Header.propTypes = {
  user: PropTypes.shape({}),
  loginUser: PropTypes.func.isRequired,
  logOutUser: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
}

Header.defaultProps = {
  user: null,
  loading: false,
}

export default Header
