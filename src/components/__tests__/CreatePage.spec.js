import React from 'react'
import { shallow } from 'enzyme'
import { CreatePage } from '../CreatePage.js'
import moment from '../__mocks__/moment.js'

let onSubmit, history, wrapper

beforeEach(() => {
  onSubmit = jest.fn()
  history = { push: jest.fn() }
  wrapper = shallow(<CreatePage onSubmit={onSubmit} history={history} />)
})

test('should render Create Page correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should handle submit event', () => {
  const expense = {
    description: 'bill',
    amount: 1000,
    createdAt: moment(0).valueOf(),
    note: ''
  }
  wrapper.find('ExpenseForm').prop('onSubmit')(expense)
  expect(onSubmit).toHaveBeenLastCalledWith(expense)
  expect(history.push).toHaveBeenLastCalledWith('/')
})
