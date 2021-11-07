import React from 'react'

import Landing from './Landing'
import * as HeaderStories from '../../components/Header/Header.stories'
import * as SubscriptionStories from '../../components/Subscription/Subscription.stories'

export default {
  title: 'Landing',
  component: Landing,
}

const Template = (args) => <Landing {...args} />;

export const Home = Template.bind({});
Home.args = {
  // More on composing args: https://storybook.js.org/docs/react/writing-stories/args#args-composition
  ...HeaderStories.LoggedOut.args,
  ...SubscriptionStories.Unsubscribed.args,
};
