import React from 'react'
import { Link } from 'react-router-dom'

const ExpenseListItem = ({
  id,
  description,
  amount,
  createdAt
}) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>Amount: {amount}, CreateAt: {createdAt}</p>
    <hr />
  </div>
)

export default ExpenseListItem