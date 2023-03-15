import React, { useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
  items: Todo[];
  addTodo: (id: string) => void;
  removeTodo: (id: string) => void;
};

type Props = {
  children?: React.ReactChild | React.ReactChild[];
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC<Props> = (props) => {
  const [todos, setTodos] = useState<Todo[]>([
    new Todo("Learn React"),
    new Todo("Learn TypeScript"),
    new Todo("Learn Java"),
  ]);
  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodoHandler = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
