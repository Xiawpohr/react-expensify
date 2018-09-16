import styled, { css } from 'styled-components'

const Card = styled.div`
  width: 25rem;
  padding: ${props => `${props.theme.spacing.lg} ${props.theme.spacing.md}`};
  background-color: white;
  border-radius: 4px;
  text-align: center;
`

Card.displayName = 'Card'

export const CardTitle = styled.h1`${props => css`
  margin: 0 0 ${props.theme.spacing.md} 0;
  line-height: 1;
`}`

CardTitle.displayName = 'CardTitle'

export default Card
