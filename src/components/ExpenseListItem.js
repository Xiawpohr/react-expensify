import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'
import { ListItem, ListItemTitle, ListItemSubtitle, ListItemData } from '../styles/List.js'

const ExpenseListItem = ({
  id,
  description,
  amount,
  createdAt
}) => {
  return id ? (
    <ListItem as={Link} to={`/edit/${id}`}>
      <div>
        <ListItemTitle as='h3'>{description}</ListItemTitle>
        <ListItemSubtitle>{moment(createdAt).format('MMMM Do, YYYY')}</ListItemSubtitle>
      </div>
      <ListItemData as='h3'>{numeral(amount / 100).format('$0,0.00')}</ListItemData>
    </ListItem>
  ) : (
    <ListItem message >
      <span>No expenses</span>
    </ListItem>
  )
}

export default ExpenseListItem
