import React from 'react'

import InputBox from './InputBox';

export default {
  title: 'form/InputBox',
  component: InputBox
}

const Template = args => <InputBox {...args} />

export const Default = Template.bind({})
Default.args = {
  placeholder: 'yourname@example.com'
}

export const Small = Template.bind({})
Small.args = {
  small: true,
  placeholder: 'yourname@example.com'
}

export const Large = Template.bind({})
Large.args = {
  large: true,
  placeholder: 'yourname@example.com'
}
