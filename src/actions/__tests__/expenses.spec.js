import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import db from '../../firebase/db.js'
import expenses from '../expenses.fixtures.js'
import * as types from '../actionTypes.js'
import * as actions from '../expenses.js'

// setup
const mockStore = configureStore([thunk])

beforeEach(() => {
  const batch = db.batch()
  expenses.forEach(expense => {
    const ref = db.collection('expenses').doc(expense.id)
    batch.set(ref, expense)
  })
  batch.commit()
})

afterEach(async () => {
  const batch = db.batch()
  const expenseDocs = await db.collection('expenses').get()
  expenseDocs.forEach(expenseDoc => {
    batch.delete(expenseDoc.ref)
  })
  batch.commit()
})

// sync
test('should setup ADD_EXPENSE_START action object', () => {
  expect(actions.addExpenseStart()).toEqual({
    type: types.ADD_EXPENSE_START
  })
})

test('should setup FETCH_EXPENSES_START actio object', () => {
  expect(actions.fetchExpensesStart()).toEqual({
    type: types.FETCH_EXPENSES_START
  })
})

test('should setup FETCH_EXPENSES_SUCCESS action object', () => {
  expect(actions.fetchExpensesSuccess(expenses)).toEqual({
    type: types.FETCH_EXPENSES_SUCCESS,
    expenses
  })
})

test('should setup FETCH_EXPENSE_FAILURE action object', () => {
  const error = 'There is something wrong'
  expect(actions.fetchExpensesFailure(error)).toEqual({
    type: types.FETCH_EXPENSES_FAILURE,
    error
  })
})

test('should setup ADD_EXPENSE_SUCCESS action object', () => {
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

test('should setup ADD_EXPENSE_FAILURE action object', () => {
  const error = 'There is something wrong.'
  expect(actions.addExpenseFailure(error)).toEqual({
    type: types.ADD_EXPENSE_FAILURE,
    error
  })
})

test('should setup EDIT_EXPENSE_START action object', () => {
  expect(actions.editExpenseStart()).toEqual({
    type: types.EDIT_EXPENSE_START
  })
})

test('should setup EDIT_EXPENSE_SUCCESS action object', () => {
  const id = 'editting-id'
  const updates = {
    description: 'updated-description'
  }
  expect(actions.editExpenseSuccess(id, updates)).toEqual({
    type: types.EDIT_EXPENSE_SUCCESS,
    id,
    updates
  })
})

test('should setup EDIT_EXPENSE_FAILURE action object', () => {
  const error = 'There is something wrong.'
  expect(actions.editExpenseFailure(error)).toEqual({
    type: types.EDIT_EXPENSE_FAILURE,
    error
  })
})

test('should setup REMOVE_EXPENSE_START action object', () => {
  expect(actions.removeExpenseStart()).toEqual({
    type: types.REMOVE_EXPENSE_START
  })
})

test('should setup REMOVE_EXPENSE_SUCCESS action object', () => {
  const id = expenses[0].id
  expect(actions.removeExpenseSuccess(id)).toEqual({
    type: types.REMOVE_EXPENSE_SUCCESS,
    id
  })
})

test('should setup REMOVE_EXPENSE_FAILURE action object', () => {
  const error = 'There is something wrong.'
  expect(actions.removeExpenseFailure(error)).toEqual({
    type: types.REMOVE_EXPENSE_FAILURE,
    error
  })
})

// async
test('should handle fetch expenses async action', async () => {
  const store = mockStore([])
  await store.dispatch(actions.fetchExpenses())
  const mockActions = store.getActions()
  expect(mockActions[0]).toEqual(actions.fetchExpensesStart())
  expect(mockActions[1]).toEqual(actions.fetchExpensesSuccess(expenses))
})

test('should handle add expense async action', async () => {
  const expense = {
    description: 'test expense',
    amount: 100,
    createdAt: 2000,
    note: 'test note'
  }
  const store = mockStore([])

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
  const store = mockStore([])

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

test('should handle edit expense async action', async () => {
  const id = expenses[1].id
  const updates = {
    description: 'updated-description'
  }
  const store = mockStore([])

  const updatedExpense = await store.dispatch(actions.editExpense(id, updates))
  const mockActions = store.getActions()
  expect(mockActions[0]).toEqual(actions.editExpenseStart())
  expect(mockActions[1]).toEqual(actions.editExpenseSuccess(id, updates))
  expect(updatedExpense.description).toBe(updates.description)
})

test('should handle remove expense action object', async () => {
  const id = expenses[1].id
  const store = mockStore([])
  await store.dispatch(actions.removeExpense(id))
  const mockActions = store.getActions()
  expect(mockActions[0]).toEqual(actions.removeExpenseStart())
  expect(mockActions[1]).toEqual(actions.removeExpenseSuccess(id))
  const removedExpenseDoc = await db.collection('expenses').doc(id).get()
  expect(removedExpenseDoc.exists).toBe(false)
})
