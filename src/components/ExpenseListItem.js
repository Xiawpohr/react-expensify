import React from 'react'
import moment from 'moment'
import numeral from 'numeral'
import { ListItem, ListItemTitle, ListItemSubtitle, ListItemData, ListItemMessenge } from '../styles/List.js'

const ExpenseListItem = ({
  id,
  description,
  amount,
  createdAt
}) => {
  return id ? (
    <ListItem to={`/edit/${id}`}>
      <div>
        <ListItemTitle as='h3'>{description}</ListItemTitle>
        <ListItemSubtitle>{moment(createdAt).format('MMMM Do, YYYY')}</ListItemSubtitle>
      </div>
      <ListItemData as='h3'>{numeral(amount / 100).format('$0,0.00')}</ListItemData>
    </ListItem>
  ) : (
    <ListItemMessenge >
      <span>No expenses</span>
    </ListItemMessenge>
  )
}

export default ExpenseListItem
