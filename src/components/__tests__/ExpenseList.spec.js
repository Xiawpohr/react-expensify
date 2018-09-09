import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseList } from '../ExpenseList.js'

const expenses = [{
  id: '1', description: 'water bill', amount: 100, createdAt: 2000
}, {
  id: '2', description: 'rent bill', amount: 2000, createdAt: 4200
}, {
  id: '3', description: 'electricity bill', amount: 500, createdAt: 3000
}]

test('should render ExpenseList with expenses correctly', () => {
  const wrapper = shallow(<ExpenseList expenses={expenses} />)
  expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseList without expenses', () => {
  const wrapper = shallow(<ExpenseList expenses={[]} />)
  expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseList without expenses props', () => {
  const wrapper = shallow(<ExpenseList />)
  expect(wrapper).toMatchSnapshot()
})
