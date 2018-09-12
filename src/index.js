import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import App, { store } from './App.js'
import './firebase/init.js'
import './index.css'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import { fetchExpenses } from './actions/expenses'

ReactDOM.render(<h1>Loading...</h1>, document.getElementById('root'))
store.dispatch(fetchExpenses()).then(() => {
  ReactDOM.render(<App />, document.getElementById('root'))
})

registerServiceWorker()
