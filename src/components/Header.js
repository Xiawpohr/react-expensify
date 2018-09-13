import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logout } from '../actions/auth.js'

export const Header = (props) => (
  <header>
    <h1>Expensify APP</h1>
    <NavLink to='/' activeClassName='active-link' exact>DashBoard</NavLink>
    <NavLink to='/create' activeClassName='active-link' >Create Expense</NavLink>
    <NavLink to='/help' activeClassName='active-link' >Help</NavLink>
    <button onClick={props.logout} >Log Out</button>
  </header>
)

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
})

export default connect(undefined, mapDispatchToProps)(Header)
