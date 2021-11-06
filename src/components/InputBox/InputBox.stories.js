import React from 'react'

import InputBox from './InputBox';

export default {
  title: 'Base/InputBox',
  component: InputBox,
}

const Template = args => <InputBox {...args} />

export const Default = Template.bind({})
Default.args = {
  placeholder: 'yourname@example.com'
}

export const Small = Template.bind({})
Small.args = {
  ...Default.args,
  small: true,
}

export const Large = Template.bind({})
Large.args = {
  ...Default.args,
  large: true,
}
