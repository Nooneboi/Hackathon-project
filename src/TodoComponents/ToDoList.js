import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import "./Todo.css"

export const TodoList = ({task, deleteTodo}) => {
  return (
    <div className="Todo-List">
        <p>{task.task}</p>
        <div>
        <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => deleteTodo(task.id)} /> 

          
        </div>
    </div>
  )
}