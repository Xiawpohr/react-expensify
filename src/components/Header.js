import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withTheme } from 'styled-components'
import { logout } from '../actions/auth.js'
import BackgroundColor from '../styles/BackgroundColor.js'
import Container from '../styles/Container.js'
import Flex from '../styles/Flex.js'
import Button from '../styles/Button.js'
import LogoText from '../styles/LogoText.js'

export const Header = (props) => (
  <BackgroundColor as='header' color={props.theme.colors.darkBlue}>
    <Container>
      <Flex justifyContent='space-between' alignItems='center' >
        <LogoText as={Link} to='/dashboard' >
          <h1>Expensify</h1>
        </LogoText>
        <Button link onClick={props.logout} >Log Out</Button>
      </Flex>
    </Container>
  </BackgroundColor>
)

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
})

export default withTheme(connect(undefined, mapDispatchToProps)(Header))
