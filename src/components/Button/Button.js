import React from 'react'
import PropTypes from 'prop-types'

import { Btn } from './styles';

const Button = ({ connecting, label, ...rest }) => {

  return (
    <Btn {...rest}>
      {
        connecting ? 'Loading...' : label
      }
    </Btn>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  primary: PropTypes.bool,
  success: PropTypes.bool,
  danger: PropTypes.bool,
  connecting: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

Button.defaultProps = {
  primary: false,
  success: false,
  danger: false,
  connecting: false,
  onClick: undefined,
}

export default Button
