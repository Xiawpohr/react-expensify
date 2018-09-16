import styled from 'styled-components'
import { space, fontSize, color, display } from 'styled-system'

const Text = styled.div`
  ${space}
  ${fontSize}
  ${color}
  ${display}
`
Text.displayName = 'Text'

export default Text
