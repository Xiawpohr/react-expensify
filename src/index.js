import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import registerServiceWorker from './registerServiceWorker'
import App from './App.js'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
