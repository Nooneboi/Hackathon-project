import React, {useState} from 'react'
import "./Todo.css"

export const TodoForm = ({addTodo, searchQuery, onSearchChange}) => {
    const [value, setValue] = useState("")

    const submit = e => {
        e.preventDefault();

        if(value.trim() === "") {            
        
        } else {
        addTodo(value);
        setValue("");
    } }

    const handleSearchChange = (e) => {
        const query = e.target.value;
        onSearchChange(query);
      };
    
    return (
        <form action="" onSubmit={submit}>
            <input type='text' value={value} className='todo-input' placeholder='Write your Todo task here' 
            onChange={(e) => setValue(e.target.value)}/>
            <input type="text" className="todo-input" placeholder="Search your Todo here" onChange={handleSearchChange} value={searchQuery}/>
            <button type='submit' className='todo-button'>Add</button>
        </form>
    )
}