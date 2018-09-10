import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import ExpenseForm from './ExpenseForm.js'
import { editExpense, removeExpense } from '../actions/expenses.js'

export const EditPage = (props) => {
  const onSubmit = (expense) => {
    props.editExpense(props.id, expense)
    props.history.push('/')
  }

  const onRemove = () => {
    props.removeExpense(props.id)
    props.history.push('/')
  }

  return (
    <div>
      Edit Page id: {props.id}
      <ExpenseForm
        description={props.description}
        amount={props.amount}
        createdAt={props.createdAt}
        note={props.note}
        onSubmit={onSubmit}
      />
      <button onClick={onRemove}>Remove</button>
    </div>
  )
}

const mapStateToProps = (state, props) => {
  const expense = state.expenses.find(expense => expense.id === props.match.params.id)
  return { ...expense }
}

const mapDispatchToProps = (dispatch) => ({
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  removeExpense: (id) => dispatch(removeExpense(id))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditPage))
