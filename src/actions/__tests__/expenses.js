import { addExpense, editExpense, removeExpense } from '../expenses.js'
import { ADD_EXPENSE, EDIT_EXPENSE, REMOVE_EXPENSE } from '../actionTypes.js'

test('should setup add expense action object', () => {
  const newExpense = {
    description: 'test expense',
    amount: 100,
    createdAt: 2000,
    note: 'test note'
  }

  expect(addExpense(newExpense)).toMatchObject({
    type: ADD_EXPENSE,
    expense: {
      id: expect.any(String),
      ...newExpense
    }
  })
})

test('should setup add expense action object with default value', () => {
  expect(addExpense()).toMatchObject({
    type: ADD_EXPENSE,
    expense: {
      id: expect.any(String),
      description: '',
      amount: 0,
      createdAt: 0,
      note: ''
    }
  })
})

test('should setup edit expense action object', () => {
  const updates = {
    description: 'updated-description'
  }
  expect(editExpense('edited-id', updates)).toEqual({
    type: EDIT_EXPENSE,
    id: 'edited-id',
    updates
  })
})

test('should setup remove expense action object', () => {
  expect(removeExpense('removed-id')).toEqual({
    type: REMOVE_EXPENSE,
    id: 'removed-id'
  })
})
