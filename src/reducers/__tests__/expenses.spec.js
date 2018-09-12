import expensesReducer from '../expenses.js'
import * as actions from '../../actions/expenses.js'

test('should return the initial state', () => {
  expect(expensesReducer(undefined, { type: '@@INIT' })).toEqual([])
})

test('should handle fetch expenses action', () => {
  const expense = {
    id: '123',
    description: '',
    amount: 0,
    createdAt: 0,
    note: ''
  }
  expect(expensesReducer([], actions.addExpenseSuccess(expense)))
    .toEqual([expense])
})

test('should handle add expense action', () => {
  const expense = {
    id: '123',
    description: '',
    amount: 0,
    createdAt: 0,
    note: ''
  }
  expect(expensesReducer([], actions.addExpenseSuccess(expense)))
    .toEqual([expense])
})

test('should handle edit expense action', () => {
  const expenses = [{
    id: '1',
    description: 'rent',
    amount: 4000,
    createdAt: 8000,
    note: 'the very expensive house'
  }]
  const state = expensesReducer(expenses, actions.editExpenseSuccess('1', { amount: 9000 }))
  expect(state).toEqual([
    {
      id: '1',
      description: 'rent',
      amount: 9000,
      createdAt: 8000,
      note: 'the very expensive house'
    }
  ])
})

test('should not edit expense if expense is not found', () => {
  const expenses = [{
    id: '1',
    description: 'rent',
    amount: 4000,
    createdAt: 8000,
    note: 'the very expensive house'
  }]
  const state = expensesReducer(expenses, actions.editExpenseSuccess('-1', { amount: 9000 }))
  expect(state).toEqual(expenses)
})

test('should handle remove expense action', () => {
  const expenses = [{
    id: '1',
    description: 'rent',
    amount: 4000,
    createdAt: 8000,
    note: 'the very expensive house'
  }]
  const nextState = expensesReducer(expenses, actions.removeExpenseSuccess('1'))
  expect(nextState).toEqual([])
})

test('should not remove expense if expense is not found', () => {
  const expenses = [{
    id: '1',
    description: 'rent',
    amount: 4000,
    createdAt: 8000,
    note: 'the very expensive house'
  }]
  const state = expensesReducer(expenses, actions.removeExpenseSuccess('-1'))
  expect(state).toEqual(expenses)
})
