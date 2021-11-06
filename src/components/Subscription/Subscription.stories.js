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
}
