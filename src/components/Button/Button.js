import React from 'react'
import PropTypes from 'prop-types'

import { Btn } from './styles';

const Button = ({ label, ...rest }) => {
  return (
    <Btn {...rest}>
      {label}
    </Btn>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  primary: PropTypes.bool,
  success: PropTypes.bool,
  danger: PropTypes.bool
}

export default Button
