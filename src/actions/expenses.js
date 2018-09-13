import db from '../firebase/db.js'
import * as types from './actionTypes.js'

// sync
export const fetchExpensesStart = () => ({
  type: types.FETCH_EXPENSES_START
})

export const fetchExpensesSuccess = (expenses) => ({
  type: types.FETCH_EXPENSES_SUCCESS,
  expenses
})

export const fetchExpensesFailure = (error) => ({
  type: types.FETCH_EXPENSES_FAILURE,
  error
})

export const addExpenseStart = () => ({
  type: types.ADD_EXPENSE_START
})

export const addExpenseSuccess = (expense) => ({
  type: types.ADD_EXPENSE_SUCCESS,
  expense
})

export const addExpenseFailure = (error) => ({
  type: types.ADD_EXPENSE_FAILURE,
  error
})

export const editExpenseStart = () => ({
  type: types.EDIT_EXPENSE_START
})

export const editExpenseSuccess = (id, updates) => ({
  type: types.EDIT_EXPENSE_SUCCESS,
  id,
  updates
})

export const editExpenseFailure = (error) => ({
  type: types.EDIT_EXPENSE_FAILURE,
  error
})

export const removeExpenseStart = () => ({
  type: types.REMOVE_EXPENSE_START
})

export const removeExpenseSuccess = (id) => ({
  type: types.REMOVE_EXPENSE_SUCCESS,
  id
})

export const removeExpenseFailure = (error) => ({
  type: types.REMOVE_EXPENSE_FAILURE,
  error
})

// async
export const fetchExpenses = () => {
  return async (dispatch, getState) => {
    const userId = getState().auth.uid
    dispatch(fetchExpensesStart())
    try {
      const expensesDocs = await db.collection('users').doc(userId).collection('expenses').get()
      const expenses = expensesDocs.docs.map(expense => ({
        id: expense.id,
        ...expense.data()
      }))
      dispatch(fetchExpensesSuccess(expenses))
      return expenses
    } catch (error) {
      dispatch(fetchExpensesFailure(error))
    }
  }
}

export const addExpense = (expense = {}) => {
  const {
    description = '',
    amount = 0,
    createdAt = 0,
    note = ''
  } = expense
  return async (dispatch, getState) => {
    const userId = getState().auth.uid
    dispatch(addExpenseStart())
    try {
      const expenseRef = await db.collection('users').doc(userId).collection('expenses').add({ description, amount, createdAt, note })
      const expenseDoc = await expenseRef.get()
      const expenseData = expenseDoc.data()
      dispatch(addExpenseSuccess({
        id: expenseDoc.id,
        ...expenseData
      }))
      return expenseData
    } catch (error) {
      dispatch(addExpenseFailure(error))
      return error
    }
  }
}

export const editExpense = (id, updates = {}) => {
  return async (dispatch, getState) => {
    const userId = getState().auth.uid
    dispatch(editExpenseStart())
    try {
      const expenseRef = db.collection('users').doc(userId).collection('expenses').doc(id)
      await expenseRef.update(updates)
      dispatch(editExpenseSuccess(id, updates))
      return (await expenseRef.get()).data()
    } catch (error) {
      dispatch(editExpenseFailure(error))
      return error
    }
  }
}

export const removeExpense = (id) => {
  return async (dispatch, getState) => {
    const userId = getState().auth.uid
    dispatch(removeExpenseStart())
    try {
      await db.collection('users').doc(userId).collection('expenses').doc(id).delete()
      dispatch(removeExpenseSuccess(id))
    } catch (error) {
      dispatch(removeExpenseFailure(error))
      return error
    }
  }
}
