import React from 'react'
import { render, screen } from '@testing-library/react'

import { photos } from '../__test__/test-photo-data'
import Gallery from './Gallery'

const handleClick = jest.fn()
const columns = jest.fn((_) => 3)

test('Gallery renders and reacts to ckick events', async () => {
  render(<Gallery photos={photos} onClick={handleClick} />)

  const image = screen.queryAllByRole('img')[0]
  image.click()
  expect(handleClick).toHaveBeenCalled()
})

test('Gallery renders correctly with direction set to column', () => {
  const wrapper = render(<Gallery photos={photos} direction="column" />)
  expect(wrapper).toMatchSnapshot()
})

test('Gallery renders correctly with a column function', () => {
  const wrapper = render(
    <Gallery photos={photos} columns={columns} direction="column" />
  )
  expect(columns).toBeCalledWith(1140)
})
