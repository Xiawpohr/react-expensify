import * as types from '../actions/actionTypes.js'

const expensesDefaultState = []

export default (state = expensesDefaultState, action) => {
  switch (action.type) {
    case types.FETCH_EXPENSES_START:
      return state
    case types.FETCH_EXPENSES_SUCCESS:
      return [...action.expenses]
    case types.FETCH_EXPENSES_FAILURE:
      return state
    case types.ADD_EXPENSE_START:
      return state
    case types.ADD_EXPENSE_SUCCESS:
      return [...state, action.expense]
    case types.ADD_EXPENSE_FAILURE:
      return state
    case types.EDIT_EXPENSE_START:
      return state
    case types.EDIT_EXPENSE_SUCCESS:
      return state.map(expense => {
        return expense.id === action.id
          ? { ...expense, ...action.updates }
          : expense
      })
    case types.EDIT_EXPENSE_FAILURE:
      return state
    case types.REMOVE_EXPENSE_START:
      return state
    case types.REMOVE_EXPENSE_SUCCESS:
      return state.filter(expense => expense.id !== action.id)
    case types.REMOVE_EXPENSE_FAILURE:
      return state
    default:
      return state
  }
}
