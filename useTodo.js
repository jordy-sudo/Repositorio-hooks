import { useEffect, useReducer } from "react";
import {todoReducer} from "../08-useReducer/todoReducer"
const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodo = (initialState=[]) => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);
  const handleNewTodo = (todo) => {
    const action = {
      type: "[Todo] Add Todo",
      payload: todo,
    };
    dispatch(action);
  };
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDeleteTodo = (id) => {
    const action = {
      type: "[Todo] Delete Todo",
      payload: id,
    };
    dispatch(action);
  };

  const onToggleTodo = (id) => {
    const action = {
      type: "[Todo] toogle Todo",
      payload: id,
    };
    dispatch(action);
  };

  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    onToggleTodo,
    todosCount:todos.length,
    pendingTodosCount:todos.filter(todo=>!todo.done).length,
  }
};
