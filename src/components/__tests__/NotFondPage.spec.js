import React from 'react'
import { shallow } from 'enzyme'
import NotFoundPage from '../NotFoundPage.js'

test('should render not found page correctly', () => {
  const wrapper = shallow(<NotFoundPage />)
  expect(wrapper).toMatchSnapshot()
})
