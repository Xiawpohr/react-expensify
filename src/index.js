import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import configureStore from './configureStore.js'
import App from './components/App.js'
import { addExpense } from './actions/expenses.js'

const store = configureStore()
store.dispatch(addExpense({ description: 'water bill', amount: 100, createdAt: 2000 }))
store.dispatch(addExpense({ description: 'rent bill', amount: 2000, createdAt: 4200 }))
store.dispatch(addExpense({ description: 'electricity bill', amount: 500, createdAt: 3000 }))

console.log(store.getState())

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
