import React from 'react'
import ExpenseList from './ExpenseList.js'
import ExpenseListFilter from './ExpenseListFilter.js'
import ExpenseSummary from './ExpenseSummary.js'

const DashboardPage = () => (
  <div>
    <ExpenseSummary />
    <ExpenseListFilter />
    <ExpenseList />
  </div>
)

export default DashboardPage
