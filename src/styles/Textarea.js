import styled from 'styled-components'

const Textarea = styled.input`
  height: 100;
  border: 1px solid #cacccd;
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: 300;
  padding: ${props => props.theme.spacing.sm};
`
Textarea.displayName = 'Textarea'

export default Textarea
