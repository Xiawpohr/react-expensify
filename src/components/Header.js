import React from 'react'
import { connect } from 'react-redux'
import { withTheme } from 'styled-components'
import { logout } from '../actions/auth.js'
import HeaderBackground from '../styles/HeaderBackground.js'
import Container from '../styles/Container.js'
import Flex from '../styles/Flex.js'
import Button from '../styles/Button.js'
import LogoLink from '../styles/LogoLink.js'

export const Header = (props) => (
  <HeaderBackground color={props.theme.colors.darkBlue}>
    <Container>
      <Flex py={2} justifyContent='space-between' alignItems='center' >
        <LogoLink to='/dashboard' >
          <h1>Expensify</h1>
        </LogoLink>
        <Button link onClick={props.logout} >Log Out</Button>
      </Flex>
    </Container>
  </HeaderBackground>
)

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
})

export default withTheme(connect(undefined, mapDispatchToProps)(Header))
