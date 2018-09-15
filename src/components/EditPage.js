import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { withTheme } from 'styled-components'
import ExpenseForm from './ExpenseForm.js'
import { editExpense, removeExpense } from '../actions/expenses.js'
import BackgroundColor from '../styles/BackgroundColor.js'
import Container from '../styles/Container.js'
import Button from '../styles/Button.js'

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
      <BackgroundColor color={props.theme.colors.offWhite}>
        <Container py={3} mb={3}>
          <h1>Edit Expense</h1>
        </Container>
      </BackgroundColor>
      <Container>
        <ExpenseForm
          description={props.description}
          amount={props.amount}
          createdAt={props.createdAt}
          note={props.note}
          onSubmit={onSubmit}
        />
        <Button secondary onClick={onRemove}>Remove</Button>
      </Container>
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

export default withTheme(withRouter(connect(mapStateToProps, mapDispatchToProps)(EditPage)))
