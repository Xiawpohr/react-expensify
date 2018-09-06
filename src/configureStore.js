import { createStore } from 'redux'
import expensesReducer from './reducers/expenses.js'

const configStore = () => {
  return createStore(expensesReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
}

export default configStore
