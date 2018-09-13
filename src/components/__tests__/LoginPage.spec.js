import React from 'react'
import { shallow } from 'enzyme'
import { LoginPage } from '../LoginPage.js'

let login, wrapper

beforeEach(() => {
  login = jest.fn()
  wrapper = shallow(<LoginPage login={login} />)
})

test('should render Login Page correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should handle login on click evenet', () => {
  wrapper.find('button').simulate('click')
  expect(login).toHaveBeenCalledTimes(1)
})
