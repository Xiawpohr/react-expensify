import React from 'react'
import { shallow } from 'enzyme'
import ExpenseForm from '../ExpenseForm.js'
import moment from '../__mocks__/moment.js'

test('should render ExpenseForm correctly', () => {
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseForm with expense data', () => {
  const expense = {
    description: 'bill',
    amount: 1000,
    createdAt: moment(),
    note: ''
  }
  const wrapper = shallow(<ExpenseForm {...expense} />)
  expect(wrapper).toMatchSnapshot()
})

test('should call onSubmit props for valid form submission', () => {
  const expense = {
    description: 'bill',
    amount: 1000,
    createdAt: moment(0).valueOf(),
    note: ''
  }
  const onSubmit = jest.fn()
  const wrapper = shallow(<ExpenseForm {...expense} onSubmit={onSubmit} />)
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  })
  expect(wrapper.state('error')).toBe('')
  expect(onSubmit).toHaveBeenCalledWith(expense)
})

test('should render error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  })
  expect(wrapper.state('error').length).toBeGreaterThan(0)
  expect(wrapper).toMatchSnapshot()
})

test('should set description on input change', () => {
  const wrapper = shallow(<ExpenseForm />)
  const descriptionValue = 'a'
  const descriptionInput = wrapper.find('input[placeholder="Description"]')
  descriptionInput.simulate('change', {
    target: { value: descriptionValue }
  })
  expect(wrapper.state('description')).toBe(descriptionValue)
})

test('should set amount on input change', () => {
  const wrapper = shallow(<ExpenseForm />)
  const amountValue = '123.45'
  const amountInput = wrapper.find('input[placeholder="Amount"]')
  amountInput.simulate('change', {
    target: { value: amountValue }
  })
  expect(wrapper.state('amount')).toBe(amountValue)
})

test('should set amount with non number on input change', () => {
  const wrapper = shallow(<ExpenseForm />)
  const amountInput = wrapper.find('input[placeholder="Amount"]')
  const amountValue = 'abc'
  amountInput.simulate('change', {
    target: { value: amountValue }
  })
  expect(wrapper.state('amount')).toBe('')
})

test('should set note on textarea change', () => {
  const wrapper = shallow(<ExpenseForm />)
  const noteValue = 'test notes'
  const noteInput = wrapper.find('textarea')
  noteInput.simulate('change', {
    target: { value: noteValue }
  })
  expect(wrapper.state('note')).toBe(noteValue)
})

test('should set new date on date change', () => {
  const now = moment()
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now)
  expect(wrapper.state('createdAt')).toEqual(now)
})

test('should set calendar focus on change', () => {
  const wrapper = shallow(<ExpenseForm />)
  const datePicker = wrapper.find('withStyles(SingleDatePicker)')
  datePicker.prop('onFocusChange')({ focused: true })
  expect(wrapper.state('calendarFocused')).toBe(true)
  datePicker.prop('onFocusChange')({ focused: false })
  expect(wrapper.state('calendarFocused')).toBe(false)
})
