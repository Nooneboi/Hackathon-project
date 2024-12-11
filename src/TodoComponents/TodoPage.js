import React, { useState, useEffect } from 'react';
import { TodoForm } from './TodoForm';
import { v4 as uuidv4 } from 'uuid';
import { TodoList } from './ToDoList';
import Navbar from '../Navbar';
import "./Todo.css"

export const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo },
    ]);
  }

  useEffect(() => {}, [todos]); 

  const deleteTodo = id => {
    setTodos(todos.filter(todo=> todo.id !== id))
  }

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const filteredTodos = todos.filter((todo) =>
    todo.task.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
    <div className='todo-form'>
        <h1 className='h1'>Your Todo Tasks!</h1>
      <TodoForm addTodo={addTodo} searchQuery={searchQuery} onSearchChange={handleSearchChange} />
    {filteredTodos.map((todo, index) => (
        <TodoList task ={todo} key={index} 
        deleteTodo={deleteTodo}/>
    ))}  
    </div>
    </>
  );
}

export default TodoPage;