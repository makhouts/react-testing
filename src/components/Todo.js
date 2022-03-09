import React from 'react'

export const Todo = ({ todo }) => {
    const { id, task, completed } = todo;
  return (
    <div data-testid={`todo-${id}`}>{completed ? <strike> Todo - {task}</strike> : task }</div>
  )
}
