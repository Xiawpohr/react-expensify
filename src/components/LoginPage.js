import React from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/auth'

export const LoginPage = (props) => (
  <div>
    <button onClick={props.login} >Login</button>
  </div>
)

const mapDispatchToProps = (dispatch) => ({
  login: () => dispatch(login())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)
