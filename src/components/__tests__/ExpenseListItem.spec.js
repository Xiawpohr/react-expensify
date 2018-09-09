import React from 'react'
import { shallow } from 'enzyme'
import ExpenseListItem from '../ExpenseListItem.js'

const expense = {
  id: '123',
  description: 'test expense',
  amuont: 100,
  createdAt: 0,
  note: 'test note'
}

test('should render ExpenseListItem correctly', () => {
  const wrapper = shallow(<ExpenseListItem {...expense} />)
  expect(wrapper).toMatchSnapshot()
})
