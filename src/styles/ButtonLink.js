import styled from 'styled-components'
import { space } from 'styled-system'
import { Link } from 'react-router-dom'

const backgroundColor = props => {
  if (props.secondary) {
    return props.theme.colors.lightGrey
  } else if (props.link) {
    return 'unset'
  } else {
    return props.theme.colors.blue
  }
}

const ButtonLink = styled(Link)`
  ${space}
  display: inline-block;
  border: none;
  padding: ${props => props.theme.spacing.sm};
  background-color: ${backgroundColor};
  color: white;
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: 300;
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
`

ButtonLink.displayName = 'ButtonLink'

export default ButtonLink
