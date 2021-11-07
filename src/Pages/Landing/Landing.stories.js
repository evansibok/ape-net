import React from 'react'

import Landing from './Landing'

import * as HeaderStories from '../../components/Header/Header.stories'
import * as SubscriptionStories from '../../components/Subscription/Subscription.stories'

export default {
  title: 'Pages/Landing',
  component: Landing,
  argTypes: {
    logInUser: { action: 'logInUser' },
    logOutUser: { action: 'logOutUser' },
  }
}

const Template = args => <Landing {...args} />;

export const Unsubscribed = Template.bind({});
Unsubscribed.args = {
  ...HeaderStories.LoggedOut.args,
  ...SubscriptionStories.Unsubscribed.args,
  connecting: false,
  subLoading: false,
}

export const Subscribed = Template.bind({});
Subscribed.args = {
  ...HeaderStories.LoggedOut.args,
  ...SubscriptionStories.Subscribed.args,
  connecting: false,
  subLoading: false,
}
