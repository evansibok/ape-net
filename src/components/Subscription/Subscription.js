import React from 'react'
import PropTypes from 'prop-types'

import Button from '../Button/Button'
import InputBox from '../InputBox/InputBox'

import { Container } from './styles'


export const Subscription = ({ onSubscribe, onInputChange, loading }) => {

  return (
    <Container>
      <InputBox
        placeholder='your first name'
        onChange={onInputChange}
        name='first_name'
      />

      <InputBox
        placeholder='yourname@example.com'
        onChange={onInputChange}
        name='email'
      />

      <Button
        primary
        label='Send me Invite'
        loading={loading}
        onClick={onSubscribe}
      />
    </Container>
  )
}

Subscription.propTypes = {
  loading: PropTypes.bool.isRequired,
  onSubscribe: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
}

Subscription.defaultProps = {
  loading: false,
  onSubscribe: undefined,
  onInputChange: undefined,
}


export default Subscription
