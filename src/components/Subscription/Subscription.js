import React from 'react'
import PropTypes from 'prop-types'

import Button from '../Button/Button'
import InputBox from '../InputBox/InputBox'

import { Container, Form } from './styles'


export const Subscription = ({ user, isSubscribed, onSubscribe, onInputChange, loading }) => {

  return (
    <Container>
      {
        isSubscribed ? (
          <div>
            <h4>Hello {user?.first_name}</h4>
            <p>Your invitation has been sent to {user?.email}</p>
          </div>
        ) : (
          <Form>
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
          </Form>
        )
      }
    </Container>
  )
}

Subscription.propTypes = {
  user: PropTypes.shape({}),
  isSubscribed: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  onSubscribe: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
}

Subscription.defaultProps = {
  user: null,
  isSubscribed: false,
  loading: false,
  onSubscribe: undefined,
  onInputChange: undefined,
}


export default Subscription
