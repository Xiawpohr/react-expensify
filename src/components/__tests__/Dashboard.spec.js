import React from 'react'
import { shallow } from 'enzyme'
import DashboardPage from '../DashboardPage.js'

test('should render Dashboard page correctly', () => {
  const wrapper = shallow(<DashboardPage />)
  expect(wrapper).toMatchSnapshot()
})
