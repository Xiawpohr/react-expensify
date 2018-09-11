import React from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'
import getVisibleExpenses from '../selectors/getVisibleExpenses.js'
import getExpensesTotal from '../selectors/getExpensesTotal.js'

export const ExpenseSummary = (props) => {
  const expenseWord = props.count === 1 ? 'expense' : 'expenses'
  const formattedTotal = numeral(props.total / 100).format('$0,0.00')
  return (
    <div>
      <h2>Viewing {props.count} {expenseWord} totalling {formattedTotal}</h2>
    </div>
  )
}

const mapStateToProps = state => {
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  const total = getExpensesTotal(visibleExpenses)
  return {
    count: visibleExpenses.length,
    total
  }
}

export default connect(mapStateToProps)(ExpenseSummary)
