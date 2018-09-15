import React from 'react'
import ReactDOM from 'react-dom'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import registerServiceWorker from './registerServiceWorker'
import App, { store } from './App.js'
import './firebase/init.js'
import auth from './firebase/auth.js'
import { fetchExpenses } from './actions/expenses'
import { loginSuccess, logoutSuccess } from './actions/auth'

let hasRendered = false
const renderApp = () => {
  if (!hasRendered) {
    store.dispatch(fetchExpenses()).then(() => {
      ReactDOM.render(<App />, document.getElementById('root'))
    })
    hasRendered = true
  }
}

ReactDOM.render(<h1>Loading...</h1>, document.getElementById('root'))

auth.onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(loginSuccess({
      uid: user.uid,
      name: user.displayName,
      email: user.email
    }))
    renderApp()
  } else {
    store.dispatch(logoutSuccess())
    renderApp()
  }
})

registerServiceWorker()
