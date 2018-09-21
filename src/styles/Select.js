import styled from 'styled-components'

const Select = styled.select`
  height: 50px;
  border: 1px solid #cacccd;
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: 300;
  padding: ${props => props.theme.spacing.sm};
`
Select.displayName = 'Select'

export default Select
