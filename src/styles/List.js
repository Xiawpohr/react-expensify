import styled from 'styled-components'

export const ListHeader = styled.div`
  padding: ${props => `${props.theme.spacing.sm} ${props.theme.spacing.md}`};
  border: 1px solid ${props => props.theme.colors.darkOffWhite};
  display: flex;
  justify-content: space-between;
  background: ${props => props.theme.colors.offWhite};
  color: ${props => props.theme.colors.grey};
`
ListHeader.displayName = 'ListHeader'

export const ListBody = styled.div`
  margin-bottom: ${props => props.theme.spacing.md};
  @media (min-width: ${props => props.theme.breakpoints[0]}) {
    margin-bottom: ${props => props.theme.spacing.lg};
  }
`
ListBody.displayName = 'ListBody'

export const ListItem = styled.div`
  border: 1px solid ${props => props.theme.colors.darkOffWhite};
  border-top: none;
  color: ${props => props.message ? props.theme.colors.grey : props.theme.colors.darkGrey};
  display: flex;
  justify-content: ${props => props.message && 'center'};
  align-items: ${props => props.message && 'center'};
  flex-direction: column;
  padding: ${props => props.message ? props.theme.spacing.md : props.theme.spacing.sm};
  text-decoration: none;
  transition: background .3s ease;
  &:hover {
    background: ${props => props.message ? 'none' : props.theme.colors.offWhite};
  }
  @media (min-width: ${props => props.theme.breakpoints[0]}) {
    align-items: center;
    flex-direction: row;
    justify-content: ${props => props.message ? 'center' : 'space-between'};
    padding: ${props => props.theme.spacing.md};
  }
`
ListItem.displayName = 'ListItem'

export const ListItemTitle = styled.div`
  margin: 0;
  word-break: break-all;
`
ListItemTitle.displayName = 'ListItemTitle'

export const ListItemSubtitle = styled.div`
  color: ${props => props.theme.colors.grey};
  font-size: ${props => props.theme.fontSizes.small};
`
ListItemSubtitle.displayName = 'ListItemSubtitle'

export const ListItemData = styled.div`
  margin: ${props => props.theme.spacing.sm} 0 0 0;
  @media (min-width: ${props => props.theme.breakpoints[0]}) {
    margin: 0;
    padding-left: ${props => props.theme.spacing.sm};
  }
`
ListItemData.displayName = 'ListItemData'
