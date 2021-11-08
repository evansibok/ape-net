import React from 'react'

import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { Primary, Danger, Default, Success } from '../Button.stories'

beforeEach(() => {
  cleanup()
})


describe('Renders Buttons Correctly!', () => {
  it('displays \'Primary\' button', async () => {

    const PrimaryBtn = render(<Primary {...Primary.args} />).queryByText(/primary/i)

    expect(PrimaryBtn).toBeInTheDocument()
  })

  it('displays \'Default\' button', async () => {

    const DefaultBtn = render(<Default {...Default.args} />).queryByText(/default/i)

    expect(DefaultBtn).toBeInTheDocument()
  })

  it('displays \'Success\' button', async () => {

    const SuccessBtn = render(<Success {...Success.args} />).queryByText(/success/i)

    expect(SuccessBtn).toBeInTheDocument()
  })

  it('displays \'Danger\' button', async () => {

    const DangerBtn = render(<Danger {...Danger.args} />).queryByText(/danger/i)

    expect(DangerBtn).toBeInTheDocument()
  })
})
