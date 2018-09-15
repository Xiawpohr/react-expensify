import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withTheme } from 'styled-components'
import numeral from 'numeral'
import getVisibleExpenses from '../selectors/getVisibleExpenses.js'
import getExpensesTotal from '../selectors/getExpensesTotal.js'
import BackgroundColor from '../styles/BackgroundColor.js'
import Container from '../styles/Container.js'
import Button from '../styles/Button.js'
import SummaryText from '../styles/SummaryText.js'

export const ExpenseSummary = (props) => {
  const expenseWord = props.count === 1 ? 'expense' : 'expenses'
  const formattedTotal = numeral(props.total / 100).format('$0,0.00')
  return (
    <BackgroundColor color={props.theme.colors.offWhite}>
      <Container py={3} mb={3}>
        <SummaryText>
          Viewing <strong>{props.count}</strong> {expenseWord} totalling <strong>{formattedTotal}</strong>
        </SummaryText>
        <Button mt={3} as={Link} to='/create'>Add Expense</Button>
      </Container>
    </BackgroundColor>
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

export default withTheme(connect(mapStateToProps)(ExpenseSummary))
