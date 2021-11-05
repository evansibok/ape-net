import React from 'react'
import Button from './Button'

export default {
  title: 'form/Button',
  component: Button
}

const Template = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Primary'
}

export const Default = Template.bind({})
Default.args = {
  label: 'Default'
}

export const Success = Template.bind({})
Success.args = {
  success: true,
  label: 'Success'
}

export const Danger = Template.bind({})
Danger.args = {
  danger: true,
  label: 'Danger'
}
