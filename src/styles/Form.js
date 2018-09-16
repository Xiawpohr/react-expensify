import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  > * {
    margin-bottom: ${props => props.theme.space[2]};
  }
`

Form.displayName = 'Form'

export default Form
