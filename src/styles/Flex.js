import styled, { css } from 'styled-components'
import { space } from 'styled-system'

const Flex = styled.div`${props => css`
  display: flex;
  flex-direction: ${props.direction};
  flex-wrap: ${props.wrap};
  justify-content: ${props.justifyContent};
  align-items: ${props.alignItems};
  ${space}
`}`

export default Flex
