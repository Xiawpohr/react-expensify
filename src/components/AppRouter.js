import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './Header.js'
import DashboardPage from './DashboardPage.js'
import CreatePage from './CreatePage.js'
import EditPage from './EditPage.js'
import HelpPage from './HelpPage.js'
import NotFoundPage from './NotFoundPage.js'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path='/' component={DashboardPage} exact />
        <Route path='/create' component={CreatePage} />
        <Route path='/edit/:id' component={EditPage} />
        <Route path='/help' component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter
