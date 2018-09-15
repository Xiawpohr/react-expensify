import styled, { css } from 'styled-components'

const Flex = styled.div`${props => css`
  display: flex;
  flex-direction: ${props.direction};
  flex-wrap: ${props.wrap};
  justify-content: ${props.justifyContent};
  align-items: ${props.alignItems}
`}`

export default Flex
