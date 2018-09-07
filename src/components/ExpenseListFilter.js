import React from 'react'
import { connect } from 'react-redux'
import { DateRangePicker } from 'react-dates'
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filter.js'

class ExpenseListFilter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      calendarFocused: null
    }
    this.onTextChange = this.onTextChange.bind(this)
    this.onSortByChange = this.onSortByChange.bind(this)
    this.onDatesChange = this.onDatesChange.bind(this)
    this.onFocusChange = this.onFocusChange.bind(this)
  }

  onTextChange (e) {
    const text = e.target.value
    this.props.dispatch(setTextFilter(text))
  }

  onSortByChange (e) {
    const sortBy = e.target.value
    if (sortBy === 'date') {
      this.props.dispatch(sortByDate())
    } else if (sortBy === 'amount') {
      this.props.dispatch(sortByAmount())
    }
  }

  onDatesChange ({ startDate, endDate }) {
    this.props.dispatch(setStartDate(startDate))
    this.props.dispatch(setEndDate(endDate))
  }

  onFocusChange (calendarFocused) {
    this.setState({ calendarFocused })
  }

  render () {
    return (
      <div>
        <input
          type='text'
          value={this.props.text}
          onChange={this.onTextChange}
        />
        <select
          value={this.props.sortBy}
          onChange={this.onSortByChange}
        >
          <option value='date' >Date</option>
          <option value='amount'>Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.startDate}
          startDateId='unique_start_date_id'
          endDate={this.props.endDate}
          endDateId='unique_end_date_id'
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  text: state.filters.text,
  sortBy: state.filters.sortBy,
  startDate: state.filters.startDate,
  endDate: state.filters.endDate
})

export default connect(mapStateToProps)(ExpenseListFilter)
