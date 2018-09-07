import moment from 'moment'
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from '../filter.js'

import {
  SET_TEXT_FILTER,
  SORT_BY_DATE,
  SORT_BY_AMOUNT,
  SET_START_DATE,
  SET_END_DATE
} from '../actionTypes.js'

test('should setup set-text-filter action object', () => {
  const text = 'test-test'
  expect(setTextFilter(text)).toEqual({
    type: SET_TEXT_FILTER,
    text
  })
})

test('should setup set-text-filter action object with default value', () => {
  expect(setTextFilter()).toEqual({
    type: SET_TEXT_FILTER,
    text: ''
  })
})

test('should setup sort-by-date action object', () => {
  expect(sortByDate()).toEqual({
    type: SORT_BY_DATE
  })
})

test('should setup sort-by-amount action object', () => {
  expect(sortByAmount()).toEqual({
    type: SORT_BY_AMOUNT
  })
})

test('should setup set-start-date action object', () => {
  expect(setStartDate(moment(0))).toEqual({
    type: SET_START_DATE,
    date: moment(0)
  })
})

test('should setup set-end-date action object', () => {
  expect(setEndDate(moment(0))).toEqual({
    type: SET_END_DATE,
    date: moment(0)
  })
})
