import React from 'react'
import PropTypes from 'prop-types'

import { Input } from './styles'

export const InputBox = ({ placeholder, handleChange, ...rest }) => {
  return (
    <Input type='text' {...rest} placeholder={placeholder} onChange={handleChange} />
  )
}

InputBox.propTypes = {
  placeholder: PropTypes.string.isRequired,
  small: PropTypes.bool,
  large: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
}

export default InputBox
