import React, { useState } from 'react'


const Todo_List = () => {

    const [todo, setTodo] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [editingId, setEditingId] = useState(null)

    const createTodo = (id, text) => ({
        id,
        text,
        completed: false
    })

    const [todos, setTodos] = useState([])

    const addTodo = () => {

        if (todo.trim() === '') {
            return
        }

        setTodos((currentTodos) => [
            ...currentTodos,
            createTodo(Date.now(), todo.trim())
        ])
        setTodo('')
    }

    const updateTodo = () => {

        setTodos((currentTodos) =>
            currentTodos.map((item) =>
                item.id == editingId ? { ...item, text: todo.trim() } : item))

        setTodo('')
        setIsEditing(false);
        setEditingId(null);
    }

    const removeTodo = (id) => {
        setTodos((currentTodos) =>
            currentTodos.filter((currentItem) => currentItem.id !== id)
        )
    }

    return (
        <div className="relative mb-8 mt-1 flex w-full max-w-2xl flex-col items-center justify-center gap-3 px-4 sm:px-6">
            <h1 className="border-b-2 border-gray-600 pb-1 text-3xl font-bold">
                Todo List Component
            </h1>

            <div className="flex w-full flex-col items-start justify-center gap-3">
                <input
                    type="text"
                    placeholder="Enter Your todo"
                    value={todo}
                    onChange={(event) => setTodo(event.target.value)}
                    className="w-full rounded-md border border-gray-600 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <div className="flex items-center justify-start gap-2">
                    <button
                        disabled={todo.length === 0}
                        className={`rounded-md border border-gray-600 px-2 py-1 text-white ${todo.length > 0
                            ? 'cursor-pointer bg-blue-500 transition-transform duration-200  hover:scale-110'
                            : 'cursor-not-allowed bg-gray-500'
                            }`}



                        onClick={isEditing ? () => updateTodo() : addTodo}
                    >
                        {isEditing ? 'Update' : 'Submit'}
                    </button>

                    <button
                        disabled={todo.length === 0}
                        className={`rounded-md border border-gray-600 px-2 py-1 text-white ${todo.length > 0
                            ? 'cursor-pointer bg-blue-500 transition-transform duration-200  hover:scale-110'
                            : 'cursor-not-allowed bg-gray-500'
                            }`}
                        onClick={() => setTodo('')}
                    >
                        cancel
                    </button>
                </div>

                <p className="text-sm text-gray-500">
                    Double click on todo to toggle completion status
                </p>

                {todos.length > 0 && (
                    <ul className="flex w-full flex-col gap-2">
                        {todos.map((item) => (
                            <li
                                key={item.id}
                                className="flex w-full items-center gap-2 px-3 "
                                onDoubleClick={() => {
                                    setTodos((currentTodos) =>
                                        currentTodos.map((currentItem) =>
                                            currentItem.id === item.id
                                                ? { ...currentItem, completed: !currentItem.completed }
                                                : currentItem
                                        )
                                    )
                                }}
                            >
                                <p className={`min-w-0 flex-1 text-md font-semibold word-wrap ${item.completed ? 'text-gray-400 line-through' : ''}`}>{item.text}</p>
                                <button
                                    className="cursor-pointer rounded-md border border-gray-600 bg-green-700 px-2 py-1 text-white transition-transform duration-150 hover:scale-110"
                                    onClick={() => {
                                        setEditingId(item.id);
                                        setTodo(item.text);
                                        setIsEditing(true);
                                    }}
                                >
                                    Edit
                                </button>
                                <button
                                    className="cursor-pointer rounded-md border border-gray-600 bg-red-500 px-2 py-1 text-white transition-transform duration-150 hover:scale-110"
                                    onClick={() => removeTodo(item.id)}
                                >
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div >
    )
}

export default Todo_List