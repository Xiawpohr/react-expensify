import React from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/auth'
import Backdrop from '../styles/Backdrop.js'
import Card, { CardTitle } from '../styles/Card.js'
import Button from '../styles/Button.js'
import bg from '../images/bg.jpg'

export const LoginPage = (props) => (
  <div>
    <Backdrop url={bg}>
      <Card>
        <CardTitle>Expensify</CardTitle>
        <p>It's time to get your expenses under control.</p>
        <Button onClick={props.login} >Login With Google</Button>
      </Card>
    </Backdrop>
  </div>
)

const mapDispatchToProps = (dispatch) => ({
  login: () => dispatch(login())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)
