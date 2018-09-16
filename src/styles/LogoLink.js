import styled from 'styled-components'
import { Link } from 'react-router-dom'

const LogoLink = styled(Link)`
  text-decoration: none;
  color: white;
  > * {
    margin: 0;
  }
`
LogoLink.displayName = 'LogoLink'

export default LogoLink
