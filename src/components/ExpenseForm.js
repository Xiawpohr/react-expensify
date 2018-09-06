import React from 'react'

const ExpenseForm = () => (
  <div>
    <form>
      <input
        type='text'
        placeholder='Descriptoin'
        autoFocus
      />
      <input
        type='number'
        placeholder='Amount'
      />
      <input
        type='number'
        placeholder='CreatedAt'
      />
      <button>Add Expense</button>
    </form>

  </div>
)

export default ExpenseForm
