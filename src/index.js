import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import auth from './firebase/auth.js'
import { fetchExpenses } from './actions/expenses'
import { loginSuccess, logoutSuccess } from './actions/auth'
import App, { store } from './App.js'
import LoadingPage from './components/LoadingPage.js'
import 'react-dates/initialize'
import './firebase/init.js'
import 'normalize.css/normalize.css'
import 'react-dates/lib/css/_datepicker.css'
import './injectGlobalStyle.js'

let hasRendered = false
const renderApp = () => {
  if (!hasRendered) {
    store.dispatch(fetchExpenses()).then(() => {
      ReactDOM.render(<App />, document.getElementById('root'))
    })
    hasRendered = true
  }
}

ReactDOM.render(<LoadingPage />, document.getElementById('root'))

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
