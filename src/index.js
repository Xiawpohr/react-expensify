import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import App, { store } from './App.js'
import './firebase/init.js'
import './index.css'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import { fetchExpenses } from './actions/expenses'
import auth from './firebase/auth.js'
import { loginSuccess, logoutSuccess } from './actions/auth'

ReactDOM.render(<h1>Loading...</h1>, document.getElementById('root'))

auth.onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(loginSuccess({
      uid: user.uid,
      name: user.displayName,
      email: user.email
    }))
    store.dispatch(fetchExpenses()).then(() => {
      ReactDOM.render(<App />, document.getElementById('root'))
    })
  } else {
    store.dispatch(logoutSuccess())
  }
})

registerServiceWorker()
