import React from 'react'

function EditPage (props) {
  return (
    <div>
      Edit Page id: {props.match.params.id}
    </div>
  )
}

export default EditPage
