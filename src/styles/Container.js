import styled from 'styled-components'
import { space } from 'styled-system'

const Container = styled.div`
  ${space}
  max-width: 80rem;
  margin: 0 auto;
  padding: ${props => props.theme.space[2]}
`

export default Container
