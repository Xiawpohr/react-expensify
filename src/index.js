import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import App from './App.js'
import './firebase/init.js'
import './index.css'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
