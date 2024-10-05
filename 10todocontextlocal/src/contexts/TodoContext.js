import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo message",
            completed: false
        }
    ],
    addTodo: (todo) =>{},
    updateTodo: (id, todo) =>{},
    deleteTodo: (id) => {},
    updateToggle: (id) =>{}
})

export const useTodo = () =>{
    return useContext(TodoContext)
}

export const TodoContextProvider = TodoContext.Provider