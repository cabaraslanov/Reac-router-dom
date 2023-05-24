import React, { memo } from 'react'

const Todo = ({todo}) => {
  return (
    <li>{todo}</li>
  )
}

export default memo(Todo) 