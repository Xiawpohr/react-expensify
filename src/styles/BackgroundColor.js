import styled from 'styled-components'

const BackgroundColor = styled.div`
  background-color: ${props => props.color}
`

BackgroundColor.displayName = 'BackgroundColor'

export default BackgroundColor
