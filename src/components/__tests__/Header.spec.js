import React from 'react'
import { shallow } from 'enzyme'
import { Header } from '../Header.js'

let logout, wrapper

beforeEach(() => {
  logout = jest.fn()
  wrapper = shallow(<Header logout={logout} />)
})

test('should render Header correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should handle logout on button click event', () => {
  wrapper.find('button').simulate('click')
  expect(logout).toHaveBeenCalledTimes(1)
})
