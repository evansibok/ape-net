import React from 'react'
import Subscription from './Subscription'

import * as InputBoxStories from '../InputBox/InputBox.stories'

export default {
  title: 'Form/Subscription',
  component: Subscription,
}

const Template = args => <Subscription {...args} />

export const Unsubscribed = Template.bind({})
Unsubscribed.args = {
  ...InputBoxStories.Default.args,
  subLoading: false,
  isSubscribed: false,
  user: null,
}

export const Subscribed = Template.bind({})
Subscribed.args = {
  subLoading: false,
  isSubscribed: true,
  user: {
    first_name: 'James',
    email: 'james.bond@hey.com'
  }
}
