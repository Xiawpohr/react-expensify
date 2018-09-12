import db from '../firebase/db.js'
import * as types from './actionTypes.js'

// sync
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

// async
export const addExpense = (expense = {}) => {
  const {
    description = '',
    amount = 0,
    createdAt = 0,
    note = ''
  } = expense
  return async (dispatch) => {
    dispatch(addExpenseStart())
    try {
      const expenseRef = await db.collection('expenses').add({ description, amount, createdAt, note })
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
  return async (dispatch) => {
    dispatch(editExpenseStart())
    try {
      const expenseRef = db.collection('expenses').doc(id)
      await expenseRef.update(updates)
      dispatch(editExpenseSuccess(id, updates))
      return (await expenseRef.get()).data()
    } catch (error) {
      dispatch(editExpenseFailure(error))
      return error
    }
  }
}

export const removeExpense = (id) => ({
  type: types.REMOVE_EXPENSE,
  id
})
