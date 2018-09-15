import styled from 'styled-components'
import { space } from 'styled-system'

const Button = styled.button`
  ${space}
  display: inline-block;
  border: none;
  padding: ${props => props.theme.spacing.sm};
  background-color: ${props => (props.link) ? 'unset' : props.theme.colors.blue};
  color: white;
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: 300;
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
`

export default Button
