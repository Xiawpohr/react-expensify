import getExpensesTotal from '../getExpensesTotal.js'

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
  createdAt: 0,
  note: ''
}, {
  id: '3',
  description: 'Credit Card',
  amount: 4000,
  createdAt: 0,
  note: ''
}]

test('should return 0 if no expenses', () => {
  const total = getExpensesTotal([])
  expect(total).toBe(0)
})

test('should correctly add up a single expense', () => {
  const total = getExpensesTotal([expenses[0]])
  expect(total).toBe(300)
})

test('should correctly add up multiple expenses', () => {
  const total = getExpensesTotal(expenses)
  expect(total).toBe(63300)
})
