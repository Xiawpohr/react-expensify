import React from 'react'
import { shallow } from 'enzyme'
import { Header } from '../Header.js'

let theme, logout, wrapper

beforeEach(() => {
  theme = {
    colors: { darkBlue: '#364051' }
  }
  logout = jest.fn()
  wrapper = shallow(<Header theme={theme} logout={logout} />)
})

test('should render Header correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should handle logout on button click event', () => {
  wrapper.find('Button').simulate('click')
  expect(logout).toHaveBeenCalledTimes(1)
})
