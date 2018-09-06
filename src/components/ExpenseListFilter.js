import React from 'react'

const ExpenseListFilter = () => (
  <div>
    <input
      type='text'
    />
    <select>
      <option value='date' >Date</option>
      <option value='amount'>Amount</option>
    </select>
  </div>
)

export default ExpenseListFilter
