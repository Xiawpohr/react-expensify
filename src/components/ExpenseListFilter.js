import React from 'react'
import { connect } from 'react-redux'
import { DateRangePicker } from 'react-dates'
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filter.js'
import Container from '../styles/Container.js'
import InputGroup from '../styles/InputGroup.js'
import InputGroupItem from '../styles/InputGroupItem.js'
import TextInput from '../styles/TextInput.js'
import Select from '../styles/Select.js'

export class ExpenseListFilter extends React.Component {
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
    this.props.setTextFilter(text)
  }

  onSortByChange (e) {
    const sortBy = e.target.value
    if (sortBy === 'date') {
      this.props.sortByDate()
    } else if (sortBy === 'amount') {
      this.props.sortByAmount()
    }
  }

  onDatesChange ({ startDate, endDate }) {
    this.props.setStartDate(startDate)
    this.props.setEndDate(endDate)
  }

  onFocusChange (calendarFocused) {
    this.setState({ calendarFocused })
  }

  render () {
    return (
      <Container>
        <InputGroup>
          <InputGroupItem>
            <TextInput
              type='text'
              placeholder='Search Expenses'
              value={this.props.text}
              onChange={this.onTextChange}
            />
          </InputGroupItem>
          <InputGroupItem>
            <Select
              value={this.props.sortBy}
              onChange={this.onSortByChange}
            >
              <option value='date' >Date</option>
              <option value='amount'>Amount</option>
            </Select>
          </InputGroupItem>
          <InputGroupItem>
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
          </InputGroupItem>
        </InputGroup>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state.filters
})

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: (date) => dispatch(setStartDate(date)),
  setEndDate: (date) => dispatch(setEndDate(date))
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilter)
