import styled from 'styled-components'

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${props => props.theme.spacing.md};
  @media (min-width: ${props => props.theme.breakpoints[0]}) {
    flex-direction: row;
    margin-bottom: ${props => props.theme.spacing.lg};
  }
`

InputGroup.displayName = 'InputGroup'

export default InputGroup
