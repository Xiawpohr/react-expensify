import React from 'react'
import ExpenseListItem from './ExpenseListItem.js'

const expenses = [
  { id: 1, description: 'water bill', amount: 100, createdAt: 2000 },
  { id: 2, description: 'rent bill', amount: 2000, createdAt: 4200 },
  { id: 3, description: 'electricity bill', amount: 500, createdAt: 3000 }
]

const ExpenseList = () => (
  <div>
    <h2>Expense List</h2>
    {expenses.map(expense => <ExpenseListItem key={expense.id} {...expense} />)}
  </div>
)

export default ExpenseList
