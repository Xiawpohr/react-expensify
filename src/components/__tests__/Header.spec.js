import React from 'react'
import { shallow } from 'enzyme'
import Header from '../Header.js'

test('should render Header correctly', () => {
  const wrapper = shallow(<Header />)
  expect(wrapper).toMatchSnapshot()
})
