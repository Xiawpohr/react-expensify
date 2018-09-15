import styled from 'styled-components'

const TextInput = styled.input`
  border: 1px solid #cacccd;
  height: 50px;
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: 300;
  padding: ${props => props.theme.spacing.sm};
`

export default TextInput
