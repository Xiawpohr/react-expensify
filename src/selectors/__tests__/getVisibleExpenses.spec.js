import moment from 'moment'
import getVisibleExpenses from '../getVisibleExpenses.js'

const expenses = [{
  id: '1',
  description: 'Gum',
  amount: 300,
  createdAt: 0,
  note: ''
}, {
  id: '2',
  description: 'Rent',
  amount: 59000,
  createdAt: moment(0).subtract(4, 'days').valueOf(),
  note: ''
}, {
  id: '3',
  description: 'Credit Card',
  amount: 4000,
  createdAt: moment(0).add(4, 'days').valueOf(),
  note: ''
}]

test('should filter by text', () => {
  const filters = {
    text: 'e',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  }
  const result = getVisibleExpenses(expenses, filters)
  expect(result).toEqual([expenses[2], expenses[1]])
})

test('should filter by startDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined
  }
  const result = getVisibleExpenses(expenses, filters)
  expect(result).toEqual([expenses[2], expenses[0]])
})

test('should filter by endDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0)
  }
  const result = getVisibleExpenses(expenses, filters)
  expect(result).toEqual([expenses[0], expenses[1]])
})

test('should sort by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  }
  const result = getVisibleExpenses(expenses, filters)
  expect(result).toEqual([expenses[2], expenses[0], expenses[1]])
})

test('should sort by amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
  const result = getVisibleExpenses(expenses, filters)
  expect(result).toEqual([expenses[1], expenses[2], expenses[0]])
})
