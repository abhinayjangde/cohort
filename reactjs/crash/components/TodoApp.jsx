import React, { useState } from 'react'

const TodoApp = () => {
    const [todos, setTodos] = useState([])
    const [inputValue, setInputValue] = useState("")

    const handleSubmit = () => {
        setTodos(todos.concat({
            text: inputValue,
            id: Math.floor((Math.random() * 100))

        }))


        setInputValue("")
    }

    const removeTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id))

    return (
        <div>
            <div>
                <input type="text" placeholder='new Todo' value={inputValue} onChange={e => setInputValue(e.target.value)} />
                <button onClick={handleSubmit} >Add Todo</button>
            </div>

            <ul>
                {todos.map(({ text, id }) => (
                    <li key={id} >
                        <span>{text}</span>
                        <button onClick={() => removeTodo(id)} >Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoApp