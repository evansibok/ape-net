import React from 'react'
import PropTypes from 'prop-types'

import { Input } from './styles'

export const InputBox = ({ placeholder, ...rest }) => {
  return (
    <Input type='text' {...rest} placeholder={placeholder} />
  )
}

InputBox.propTypes = {
  placeholder: PropTypes.string.isRequired,
  small: PropTypes.bool,
  large: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
}

export default InputBox
