import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import ExpenseForm from './ExpenseForm.js'
import { addExpense } from '../actions/expenses.js'

export const CreatePage = (props) => {
  const onSubmit = (expense) => {
    props.addExpense(expense)
    props.history.push('/')
  }

  return (
    <div>
      <h2>Add Expense</h2>
      <ExpenseForm onSubmit={onSubmit} />
    </div>
  )
}

const mapDispatchToProps = (dispatch, props) => ({
  addExpense: (expense) => dispatch(addExpense(expense))
})

export default withRouter(connect(undefined, mapDispatchToProps)(CreatePage))
