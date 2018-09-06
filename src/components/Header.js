import React from 'react'
import { NavLink } from 'react-router-dom'

function Header (props) {
  return (
    <header>
      <h1>Expensify APP</h1>
      <NavLink to='/' activeClassName='active-link' exact>DashBoard</NavLink>
      <NavLink to='/create' activeClassName='active-link' >Create Expense</NavLink>
      <NavLink to='/help' activeClassName='active-link' >Help</NavLink>
    </header>
  )
}

export default Header
