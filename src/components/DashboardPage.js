import React from 'react'
import ExpenseList from './ExpenseList.js'
import ExpenseListFilter from './ExpenseListFilter.js'

const DashboardPage = () => (
  <div>
    <ExpenseListFilter />
    <ExpenseList />
  </div>
)

export default DashboardPage
