import React from 'react'

import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { Subscribed, Unsubscribed } from '../Subscription.stories'


beforeEach(() => {
  cleanup()
})


describe('Renders Subscribed Info Correctly!', () => {
  it('displays subscribed info', async () => {
    const SubscribedForm = render(<Subscribed {...Subscribed.args} />).queryByText(/Your Invitation/i)

    expect(SubscribedForm).toBeInTheDocument()
  })

  it('displays subscribed user', () => {
    const formWithSubscribedUser = render(
      <Subscribed
        {...Subscribed.args}
        user={{
          first_name: 'Peter',
          email: 'peterbailey@hey.com'
        }}
      />).queryByText(/Peterbailey/i)

    expect(formWithSubscribedUser).toBeInTheDocument()
  })
})

describe('Renders Unsubscribed Form Correctly!', () => {
  it('displays unsubscribed form', async () => {
    const UnsubscribedForm = render(<Unsubscribed {...Unsubscribed.args} />)

    const sendInviteBtnText = UnsubscribedForm.queryByText(/Send me invite/i)

    expect(sendInviteBtnText).toBeInTheDocument()
  })
})
