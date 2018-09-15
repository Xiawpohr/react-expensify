import styled from 'styled-components'

const Button = styled.button`
  display: inline-block;
  border: none;
  padding: ${props => props.theme.spacing.sm};
  background-color: ${props => props.theme.colors.blue};
  color: white;
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: 300;
  line-height: 1;
  text-decoration: none;
`

export default Button
