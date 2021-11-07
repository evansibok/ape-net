import React from 'react'
import Button from './Button'

export default {
  title: 'Base/Button',
  component: Button,
}

const Template = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  connecting: false,
  primary: true,
  label: 'Primary'
}

export const Default = Template.bind({})
Default.args = {
  connecting: false,
  label: 'Default'
}

export const Success = Template.bind({})
Success.args = {
  connecting: false,
  success: true,
  label: 'Success'
}

export const Danger = Template.bind({})
Danger.args = {
  connecting: false,
  danger: true,
  label: 'Danger'
}
