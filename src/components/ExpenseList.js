import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem.js'
import getVisibleExpenses from '../selectors/getVisibleExpenses.js'

export const ExpenseList = (props) => (
  <div>
    <h2>Expense List</h2>
    {
      !props.expenses || props.expenses.length === 0
        ? <p>No expense exists!</p>
        : props.expenses.map(expense => <ExpenseListItem key={expense.id} {...expense} />)
    }
  </div>
)

const mapStateToProps = state => ({
  expenses: getVisibleExpenses(state.expenses, state.filters)
})

export default connect(mapStateToProps)(ExpenseList)
