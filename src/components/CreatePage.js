import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import ExpenseForm from './ExpenseForm.js'
import { addExpense } from '../actions/expenses.js'

const CreatePage = (props) => (
  <div>
    <h2>Add Expense</h2>
    <ExpenseForm onSubmit={props.onSubmit} />
  </div>
)

const mapDispatchToProps = (dispatch, props) => ({
  onSubmit: (expense) => {
    dispatch(addExpense(expense))
    props.history.push('/')
  }
})

export default withRouter(connect(undefined, mapDispatchToProps)(CreatePage))
