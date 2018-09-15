import styled from 'styled-components'
import { height } from 'styled-system'

const TextInput = styled.input`
  ${height}
  border: 1px solid #cacccd;
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: 300;
  padding: ${props => props.theme.spacing.sm};
`

TextInput.defaultProps = {
  height: 50
}

export default TextInput
