import React from 'react'
import PropTypes from 'prop-types'

import { Btn } from './styles';

const Button = ({ loading, label, ...rest }) => {

  if (loading) return <p>loading...</p>

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
  danger: PropTypes.bool,
  loading: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

Button.defaultProps = {
  primary: false,
  success: false,
  danger: false,
  loading: false,
  onClick: undefined,
}

export default Button
