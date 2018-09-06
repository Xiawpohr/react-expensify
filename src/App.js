import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './configureStore.js'
import AppRouter from './components/AppRouter.js'
import { addExpense } from './actions/expenses.js'
import { setTextFilter } from './actions/filter'

const store = configureStore()

store.dispatch(addExpense({ description: 'water bill', amount: 100, createdAt: 2000 }))
store.dispatch(addExpense({ description: 'rent bill', amount: 2000, createdAt: 4200 }))
store.dispatch(addExpense({ description: 'electricity bill', amount: 500, createdAt: 3000 }))
store.dispatch(setTextFilter('water'))

console.log(store.getState())

const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

export default App
