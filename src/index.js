import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

const Dashboard = () => <div>Dashboard page</div>
const Create = () => <div>create page</div>
const Edit = () => <div>edit page</div>
const Help = () => <div>help page</div>
const NotFoundPage = () => <div>404</div>

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Dashboard} exact />
      <Route path='/create' component={Create} />
      <Route path='/edit' component={Edit} />
      <Route path='/help' component={Help} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('root'))
registerServiceWorker()
