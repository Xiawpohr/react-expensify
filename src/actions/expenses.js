import uuid from 'uuid'
import {
  ADD_EXPENSE,
  EDIT_EXPENSE,
  REMOVE_EXPENSE
} from './actionTypes.js'

export const addExpense = ({
  description = '',
  amount = 0,
  createdAt = 0,
  note = ''
} = {}) => ({
  type: ADD_EXPENSE,
  expense: {
    id: uuid(),
    description,
    amount,
    createdAt,
    note
  }
})

export const editExpense = (id, updates) => ({
  type: EDIT_EXPENSE,
  id,
  updates
})

export const removeExpense = (id) => ({
  type: REMOVE_EXPENSE,
  id
})
