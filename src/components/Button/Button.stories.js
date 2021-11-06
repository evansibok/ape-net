import React from 'react'
import Button from './Button'

export default {
  title: 'Button',
  component: Button,
}

const Template = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  loading: false,
  primary: true,
  label: 'Primary'
}

export const Default = Template.bind({})
Default.args = {
  loading: false,
  label: 'Default'
}

export const Success = Template.bind({})
Success.args = {
  loading: false,
  success: true,
  label: 'Success'
}

export const Danger = Template.bind({})
Danger.args = {
  loading: false,
  danger: true,
  label: 'Danger'
}
