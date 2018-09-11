import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseSummary } from '../ExpenseSummary.js'

test('should correctly render Expenses Summary without expenses', () => {
  const count = 1
  const total = 123
  const wrapper = shallow(<ExpenseSummary count={count} total={total} />)
  expect(wrapper).toMatchSnapshot()
})

test('should correctly render Expenses Summary with multiple expenses', () => {
  const count = 10
  const total = 12345.67
  const wrapper = shallow(<ExpenseSummary count={count} total={total} />)
  expect(wrapper).toMatchSnapshot()
})
