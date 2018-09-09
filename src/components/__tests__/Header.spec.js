import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import Header from '../Header.js'

test('should render Header correctly', () => {
  const renderer = new ShallowRenderer()
  renderer.render(<Header />)
  expect(renderer.getRenderOutput()).toMatchSnapshot()
})
