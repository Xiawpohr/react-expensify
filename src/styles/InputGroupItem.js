import styled from 'styled-components'

const InputGroupItem = styled.div`
  margin-bottom: ${props => props.theme.spacing.sm};
  @media (min-width: ${props => props.theme.breakpoints[0]}) {
    margin: 0 ${props => props.theme.spacing.sm} 0 0;
  }
`

export default InputGroupItem
