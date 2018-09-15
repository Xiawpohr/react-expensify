import React from 'react'
import { connect } from 'react-redux'
import { withTheme } from 'styled-components'
import { addExpense } from '../actions/expenses.js'
import ExpenseForm from './ExpenseForm.js'
import BackgroundColor from '../styles/BackgroundColor.js'
import Container from '../styles/Container.js'

export const CreatePage = (props) => {
  const onSubmit = (expense) => {
    props.addExpense(expense)
    props.history.push('/')
  }

  return (
    <div>
      <BackgroundColor color={props.theme.colors.offWhite}>
        <Container py={3} mb={3}>
          <h1>Add Expense</h1>
        </Container>
      </BackgroundColor>
      <Container>
        <ExpenseForm onSubmit={onSubmit} />
      </Container>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  addExpense: (expense) => dispatch(addExpense(expense))
})

export default withTheme(connect(undefined, mapDispatchToProps)(CreatePage))
