import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute.js'
import PublicRoute from './PublicRoute.js'
import LoginPage from '../components/LoginPage.js'
import DashboardPage from '../components/DashboardPage.js'
import CreatePage from '../components/CreatePage.js'
import EditPage from '../components/EditPage.js'
import NotFoundPage from '../components/NotFoundPage.js'

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <PublicRoute path='/' component={LoginPage} exact />
      <PrivateRoute path='/dashboard' component={DashboardPage} />
      <PrivateRoute path='/create' component={CreatePage} />
      <PrivateRoute path='/edit/:id' component={EditPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
)

export default AppRouter
