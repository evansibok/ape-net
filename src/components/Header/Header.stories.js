import React from 'react'

import Header from './Header'

export default {
  title: 'Header',
  component: Header,
  argTypes: {
    loginUser: {
      action: 'loginUser'
    },
    logOutUser: {
      action: 'logOutUser'
    }
  }
}

const Template = args => <Header {...args} />

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  user: {},
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {
  user: null,
}
