import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import db from '../../firebase/db.js'
import * as types from '../actionTypes.js'
import * as actions from '../expenses.js'

const mockStore = configureStore([thunk])

test('should setup Add_EXPENSE_START action object', () => {
  expect(actions.addExpenseStart()).toEqual({
    type: types.ADD_EXPENSE_START
  })
})

test('should setup Add_EXPENSE_SUCCESS action object', () => {
  const expense = {
    id: '123',
    description: 'test expense',
    amount: 100,
    createdAt: 2000,
    note: 'test note'
  }
  expect(actions.addExpenseSuccess(expense)).toEqual({
    type: types.ADD_EXPENSE_SUCCESS,
    expense: {
      id: expect.any(String),
      ...expense
    }
  })
})

test('should setup Add_EXPENSE_FAILURE action object', () => {
  const error = 'There is something wrong.'
  expect(actions.addExpenseFailure(error)).toEqual({
    type: types.ADD_EXPENSE_FAILURE,
    error
  })
})

test('should handle add expense async action', async () => {
  const expense = {
    description: 'test expense',
    amount: 100,
    createdAt: 2000,
    note: 'test note'
  }
  const store = mockStore({})

  await store.dispatch(actions.addExpense(expense))
  const mockActions = store.getActions()
  expect(mockActions[0]).toEqual(actions.addExpenseStart())
  expect(mockActions[1]).toEqual({
    type: types.ADD_EXPENSE_SUCCESS,
    expense: {
      id: expect.any(String),
      ...expense
    }
  })

  const expenseDoc = await db.collection('expenses').doc(mockActions[1].expense.id).get()
  expect(expenseDoc.data()).toEqual(expense)
})

test('should handle add expense async action with default value', async () => {
  const defaultExpense = {
    description: '',
    amount: 0,
    createdAt: 0,
    note: ''
  }
  const store = mockStore({})

  await store.dispatch(actions.addExpense())
  const mockActions = store.getActions()
  expect(mockActions[0]).toEqual(actions.addExpenseStart())
  expect(mockActions[1]).toEqual({
    type: types.ADD_EXPENSE_SUCCESS,
    expense: {
      id: expect.any(String),
      ...defaultExpense
    }
  })

  const expenseDoc = await db.collection('expenses').doc(mockActions[1].expense.id).get()
  expect(expenseDoc.data()).toEqual(defaultExpense)
})

test('should setup edit expense action object', () => {
  const updates = {
    description: 'updated-description'
  }
  expect(actions.editExpense('edited-id', updates)).toEqual({
    type: types.EDIT_EXPENSE,
    id: 'edited-id',
    updates
  })
})

test('should setup remove expense action object', () => {
  expect(actions.removeExpense('removed-id')).toEqual({
    type: types.REMOVE_EXPENSE,
    id: 'removed-id'
  })
})
