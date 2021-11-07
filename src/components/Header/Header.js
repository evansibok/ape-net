import React from 'react'
import PropTypes from 'prop-types'

import BrandLogo from '../../assets/apenet-logo.png'

import Button from '../Button/Button'
import { Container, Logo } from './styles'

export const Header = ({ loggedIn, connecting, logInUser, logOutUser }) => {
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
              connecting={connecting}
            />
          ) : (
            <Button
              primary
              label='Connect Wallet'
              onClick={logInUser}
              connecting={connecting}
            />
          )
        }
      </div>
    </Container>
  )
}

Header.propTypes = {
  connecting: PropTypes.bool.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  logInUser: PropTypes.func,
  logOutUser: PropTypes.func,
}

Header.defaultProps = {
  connecting: false,
  loggedIn: false,
  logInUser: undefined,
  logOutUser: undefined,
}

export default Header
