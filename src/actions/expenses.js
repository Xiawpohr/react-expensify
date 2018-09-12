import db from '../firebase/db.js'
import * as types from './actionTypes.js'

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
    }
  }
}

export const editExpense = (id, updates) => ({
  type: types.EDIT_EXPENSE,
  id,
  updates
})

export const removeExpense = (id) => ({
  type: types.REMOVE_EXPENSE,
  id
})
