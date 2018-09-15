import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem.js'
import getVisibleExpenses from '../selectors/getVisibleExpenses.js'
import Container from '../styles/Container.js'
import Text from '../styles/Text.js'
import { ListHeader, ListBody } from '../styles/List.js'

export const ExpenseList = (props) => (
  <Container>
    <ListHeader>
      <Text display={['block', 'none']} >Expenses</Text>
      <Text display={['none', 'block']} >Expense</Text>
      <Text display={['none', 'block']} >Amount</Text>
    </ListHeader>
    <ListBody>
      {
        !props.expenses || props.expenses.length === 0
          ? <ExpenseListItem />
          : props.expenses.map(expense => <ExpenseListItem key={expense.id} {...expense} />)
      }
    </ListBody>
  </Container>
)

const mapStateToProps = state => ({
  expenses: getVisibleExpenses(state.expenses, state.filters)
})

export default connect(mapStateToProps)(ExpenseList)
