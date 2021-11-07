import React from 'react'
import PropTypes from 'prop-types'

import BrandLogo from '../../assets/apenet-logo.png'

import Button from '../Button/Button'
import { Container, Logo } from './styles'

export const Header = ({ loggedIn, loading, loginUser, logOutUser }) => {
  return (
    <Container>
      <Logo className='logo-brand'>
        <img src={BrandLogo} alt='apenet logo' />
      </Logo>

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
