import React from 'react'
import ExpenseForm from './ExpenseForm.js'

function EditPage (props) {
  return (
    <div>
      Edit Page id: {props.match.params.id}
      <ExpenseForm />
    </div>
  )
}

export default EditPage
