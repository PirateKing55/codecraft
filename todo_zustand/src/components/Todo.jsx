import React from 'react'

function Todo({ todo }) {
    return (
        <div>
            <p>{todo.title}</p>
            <p>{todo.description}</p>
        </div>
    )
}

export default Todo
