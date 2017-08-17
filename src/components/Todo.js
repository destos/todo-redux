import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, onDeleteClick, completed, text }) => (
  <div
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    <span onClick={onClick}>{text}</span>
    <button onClick={onDeleteClick}>Delete</button>
  </div>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
