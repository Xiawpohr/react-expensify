import styled from 'styled-components'

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${props => props.url});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Backdrop
