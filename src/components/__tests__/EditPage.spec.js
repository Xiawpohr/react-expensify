import React from 'react'
import { shallow } from 'enzyme'
import { EditPage } from '../EditPage.js'
import moment from '../__mocks__/moment.js'

let wrapper, editExpense, removeExpense, history, expense, id

beforeEach(() => {
  id = 'abc'
  expense = {
    description: 'bill',
    amount: 1000,
    createdAt: moment(0).valueOf(),
    note: ''
  }
  editExpense = jest.fn()
  removeExpense = jest.fn()
  history = { push: jest.fn() }
  wrapper = shallow(
    <EditPage
      {...expense}
      id={id}
      editExpense={editExpense}
      removeExpense={removeExpense}
      history={history}
    />
  )
})

test('should render Edit Page correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should handle editExpense action', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expense)
  expect(editExpense).toHaveBeenLastCalledWith(id, expense)
  expect(history.push).toHaveBeenLastCalledWith('/')
})

test('should handle removeExpense action', () => {
  wrapper.find('button').simulate('click')
  expect(removeExpense).toHaveBeenCalledWith(id)
  expect(history.push).toHaveBeenLastCalledWith('/')
})
