import React from 'react'
import { shallow } from 'enzyme'
import HelpPage from '../HelpPage.js'

test('should render help page correctly', () => {
  const wrapper = shallow(<HelpPage />)
  expect(wrapper).toMatchSnapshot()
})
