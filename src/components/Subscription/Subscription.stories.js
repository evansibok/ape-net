import React from 'react'
import Subscription from './Subscription'

export default {
  title: 'Form/Subscription',
  component: Subscription,
}

const Template = args => <Subscription {...args} />

export const Unsubscribed = Template.bind({})
Unsubscribed.args = {
  loading: false,
  isSubscribed: false,
  user: null,
}

export const Subscribed = Template.bind({})
Subscribed.args = {
  loading: false,
  isSubscribed: true,
  user: {
    first_name: 'James',
    email: 'james.bond@hey.com'
  }
}
