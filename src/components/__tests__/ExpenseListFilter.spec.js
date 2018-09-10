import React from 'react'
import { shallow } from 'enzyme'
import moment from 'moment'
import { ExpenseListFilter } from '../ExpenseListFilter.js'

const filters = {
  text: '',
  sortBy: 'date',
  startDate: null,
  endDate: null
}

const altFilters = {
  text: 'bill',
  sortBy: 'date',
  startDate: moment(0),
  endDate: moment(0).add(3, 'days')
}

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper

beforeEach(() => {
  setTextFilter = jest.fn()
  sortByDate = jest.fn()
  sortByAmount = jest.fn()
  setStartDate = jest.fn()
  setEndDate = jest.fn()
  wrapper = shallow(
    <ExpenseListFilter
      {...filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  )
})

test('should render ExpenseListFilter correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseListFilter with alt date correctly', () => {
  wrapper.setProps({ ...altFilters })
  expect(wrapper).toMatchSnapshot()
})

test('should handle set text filter action', () => {
  const value = 'bill'
  wrapper.find('input').simulate('change', { target: { value } })
  expect(setTextFilter).toHaveBeenLastCalledWith(value)
})

test('should handle sort by date action', () => {
  const value = 'date'
  wrapper.find('select').simulate('change', { target: { value } })
  expect(sortByDate).toHaveBeenCalledTimes(1)
})

test('should handle sort by amount action', () => {
  const value = 'amount'
  wrapper.find('select').simulate('change', { target: { value } })
  expect(sortByAmount).toHaveBeenCalledTimes(1)
})

test('should handle set start date aciton', () => {
  const datesRange = {
    startDate: 1000,
    endDate: null
  }
  wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')(datesRange)
  expect(setStartDate).toHaveBeenLastCalledWith(1000)
})

test('should handle set end date aciton', () => {
  const datesRange = {
    startDate: null,
    endDate: 1000
  }
  wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')(datesRange)
  expect(setEndDate).toHaveBeenLastCalledWith(1000)
})

test('should set calendar focused on change', () => {
  let focused = 'startDate'
  wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(focused)
  expect(wrapper.state('calendarFocused')).toBe(focused)
  focused = 'endDate'
  wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(focused)
  expect(wrapper.state('calendarFocused')).toBe(focused)
  focused = null
  wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(focused)
  expect(wrapper.state('calendarFocused')).toBe(focused)
})
