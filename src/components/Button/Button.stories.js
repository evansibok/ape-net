import React from 'react'
import Button from './Button'

export default {
  title: 'Button',
  component: Button
}

export const Secondary = () => <Button>Secondary</Button>
export const Primary = () => <Button primary>Primary</Button>
export const Success = () => <Button success>Success</Button>
export const Danger = () => <Button danger>Danger</Button>
