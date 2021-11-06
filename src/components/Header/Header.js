import React from 'react'
import PropTypes from 'prop-types'

import Button from '../Button/Button'
import { Container } from './styles'

export const Header = ({ loggedIn, loading, loginUser, logOutUser }) => {
  return (
    <Container>
      <div className='logo-brand'>
        <h3>ApeNet Logo</h3>
      </div>

      <div className='header-cta'>
        {
          loggedIn ? (
            <Button
              label='Disconnect Wallet'
              onClick={logOutUser}
              loading={loading}
            />
          ) : (
            <Button
              primary
              label='Connect Wallet'
              onClick={loginUser}
              loading={loading}
            />
          )
        }
      </div>
    </Container>
  )
}

Header.propTypes = {
  loading: PropTypes.bool.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  loginUser: PropTypes.func.isRequired,
  logOutUser: PropTypes.func.isRequired,
}

Header.defaultProps = {
  loading: false,
  loggedIn: false,
  loginUser: undefined,
  logOutUser: undefined,
}

export default Header
