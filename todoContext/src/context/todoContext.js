import React from "react";
import { createContext, useContext } from 'react';

export const TodoContext = createContext({
    todos: [
        {   id: 1,
            todo: 'todoMsg',
            completed: false
        }
    ],
    addTodo: ()=>{},
    updateTodo: () => {},
    deleteTodo: () => {},
    toggleComplted: () => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoContextProvider = TodoContext.Provider;
