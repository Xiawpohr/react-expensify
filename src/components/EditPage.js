import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import moment from 'moment'
import ExpenseForm from './ExpenseForm.js'
import { editExpense } from '../actions/expenses.js'

const EditPage = (props) => (
  <div>
    Edit Page id: {props.match.params.id}
    <ExpenseForm
      description={props.description}
      amount={props.amount}
      createdAt={props.createdAt}
      note={props.note}
      onSubmit={props.onSubmit}
    />
  </div>
)

const mapStateToProps = (state, props) => {
  const expense = state.expenses.find(expense => expense.id === props.match.params.id)
  return {
    description: expense.description,
    amount: expense.amount,
    createdAt: expense.createdAt,
    note: expense.note
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  onSubmit: (expense) => {
    dispatch(editExpense(props.match.params.id, expense))
    props.history.push('/')
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditPage))
