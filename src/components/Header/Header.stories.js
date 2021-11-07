import React from 'react'

import Header from './Header'

import * as ButtonStories from '../Button/Button.stories'

export default {
  title: 'Navigation/Header',
  component: Header,
  argTypes: {
    logInUser: {
      action: 'logInUser'
    },
    logOutUser: {
      action: 'logOutUser'
    }
  }
}

const Template = args => <Header {...args} />

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  ...ButtonStories.Default.args,
  loggedIn: true,
  label: 'Disconnect Wallet'
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {
  ...ButtonStories.Primary.args,
  loggedIn: false,
  label: 'Connect Wallet'
}
