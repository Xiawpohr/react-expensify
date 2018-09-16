import styled from 'styled-components'
import { space } from 'styled-system'

const Container = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  padding-right: ${props => props.theme.space[2]};
  padding-left: ${props => props.theme.space[2]};
  ${space}
`

Container.displayName = 'Container'

export default Container
