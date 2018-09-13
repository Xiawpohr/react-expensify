import { combineReducers } from 'redux'
import expenses from './expenses.js'
import filters from './filters.js'
import auth from './auth.js'

export default combineReducers({
  expenses,
  filters,
  auth
})
