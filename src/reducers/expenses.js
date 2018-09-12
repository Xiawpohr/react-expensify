import * as types from '../actions/actionTypes.js'

const expensesDefaultState = []

export default (state = expensesDefaultState, action) => {
  switch (action.type) {
    case types.ADD_EXPENSE_START:
      return state
    case types.ADD_EXPENSE_SUCCESS:
      return [...state, action.expense]
    case types.ADD_EXPENSE_FAILURE:
      return state
    case types.EDIT_EXPENSE:
      return state.map(expense => {
        if (expense.id === action.id) {
          return { ...expense, ...action.updates }
        } else {
          return expense
        }
      })
    case types.REMOVE_EXPENSE:
      return state.filter(expense => expense.id !== action.id)
    default:
      return state
  }
}
