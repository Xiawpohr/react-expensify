import moment from 'moment'
import filtersReducer from '../filters.js'
import * as actions from '../../actions/filter.js'

test('should return the initial filter state', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
})

test('should handle set text filter action', () => {
  const text = 'bill'
  const state = filtersReducer(undefined, actions.setTextFilter(text))
  expect(state.text).toBe(text)
})

test('should handle sort-by-date action', () => {
  const prevState = { sortBy: 'amount' }
  const state = filtersReducer(prevState, actions.sortByDate())
  expect(state.sortBy).toEqual('date')
})

test('should handle sort-by-amount action', () => {
  const state = filtersReducer(undefined, actions.sortByAmount())
  expect(state.sortBy).toBe('amount')
})

test('should handle set-start-date action', () => {
  const startDate = moment(0)
  const state = filtersReducer(undefined, actions.setStartDate(startDate))
  expect(state.startDate).toEqual(startDate)
})

test('should handle set-end-date action', () => {
  const endDate = moment(0)
  const state = filtersReducer(undefined, actions.setEndDate(endDate))
  expect(state.endDate).toEqual(endDate)
})
