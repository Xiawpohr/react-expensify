import React from 'react'
import { SingleDatePicker } from 'react-dates'

class ExpenseForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      description: props.description || '',
      amount: props.amount || '',
      createdAt: props.createdAt || null,
      note: props.note || '',
      calendarFocused: null,
      error: ''
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onDescriptionChange = this.onDescriptionChange.bind(this)
    this.onAmountChange = this.onAmountChange.bind(this)
    this.onDateChange = this.onDateChange.bind(this)
    this.onFocusChange = this.onFocusChange.bind(this)
    this.onNoteChange = this.onNoteChange.bind(this)
  }

  onSubmit (e) {
    e.preventDefault()
    if (!this.state.description || !this.state.amount) {
      this.setState({ error: 'Please provide description and amount.' })
    } else {
      this.setState({ error: '' })
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      })
    }
  }

  onDescriptionChange (e) {
    const description = e.target.value
    this.setState({ description })
  }

  onAmountChange (e) {
    const amount = e.target.value
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState({ amount })
    }
  }

  onDateChange (createdAt) {
    this.setState({ createdAt })
  }

  onFocusChange ({ focused }) {
    this.setState({ calendarFocused: focused })
  }

  onNoteChange (e) {
    const note = e.target.value
    this.setState({ note })
  }

  render () {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit} >
          <input
            type='text'
            placeholder='Descriptoin'
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type='text'
            placeholder='Amount'
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            value={this.state.note}
            onChange={this.onNoteChange}
          />
          <button>Add Expense</button>
        </form>

      </div>
    )
  }
}

export default ExpenseForm
