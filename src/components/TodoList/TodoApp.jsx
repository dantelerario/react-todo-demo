import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Trash2, Check, X } from 'lucide-react';
import { addTodo, toggleTodo, deleteTodo } from '../../store/todoSlice';

const TodoApp = () => {
    const [newTodo, setNewTodo] = useState('');
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos.items);

    const handleAddTodo = (e) => {
        e.preventDefault();
        if (newTodo.trim() === '') return;

        dispatch(addTodo(newTodo));
        setNewTodo('');
    };

    return (
        <div className="flex justify-center w-screen min-h-screen bg-gray-900 p-8">
            <div className="w-full max-w-5xl">
                <h1 className="text-4xl font-bold mb-8 text-white text-center">Todo List</h1>

                <form onSubmit={handleAddTodo} className="mb-8 w-full">
                    <div className="flex gap-3 max-w-3xl mx-auto">
                        <input
                            type="text"
                            value={newTodo}
                            onChange={(e) => setNewTodo(e.target.value)}
                            placeholder="Aggiungi un nuovo task..."
                            className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-lg text-white placeholder-gray-400"
                        />
                        <button
                            type="submit"
                            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
                        >
                            Aggiungi
                        </button>
                    </div>
                </form>

                <div className="space-y-3 bg-gray-800 rounded-xl shadow-lg p-6">
                    {todos.map(todo => (
                        <div
                            key={todo.id}
                            className="flex items-center justify-between p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                        >
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => dispatch(toggleTodo(todo.id))}
                                    className={`p-2 rounded-full ${todo.completed ? 'bg-green-900 text-green-400' : 'bg-gray-600 text-gray-400'}`}
                                >
                                    {todo.completed ? <Check size={20} /> : <X size={20} />}
                                </button>
                                <span className={`${todo.completed ? 'line-through text-gray-400' : 'text-gray-100'} text-lg`}>
                                    {todo.text}
                                </span>
                            </div>
                            <button
                                onClick={() => dispatch(deleteTodo(todo.id))}
                                className="p-2 text-red-400 hover:text-red-300 transition-colors hover:bg-red-900/50 rounded-full"
                            >
                                <Trash2 size={20} />
                            </button>
                        </div>
                    ))}

                    {todos.length === 0 && (
                        <p className="text-center text-gray-400 py-8 text-lg">
                            Nessun task presente. Aggiungine uno!
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TodoApp;