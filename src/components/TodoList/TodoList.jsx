import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodoCompleted } from "../../app/TodosSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todosArr);
  const filterInputValue = useSelector((state) => state.todosInputFilter.inputValue)

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodoCompleted(id));
  };

  const filtredTodos =  useMemo(() => {
    return todos.filter((el) => el.title.includes(filterInputValue))
  }, [filterInputValue, todos]) 

  return (
    <div>
      {filtredTodos.length
        ? filtredTodos.map((el) => (
            <div key={el.id} className="flex gap-2 m-3">
              <span className="bg-gray-100">{el.title}</span>
              <span onClick={() => handleToggleTodo(el.id)}>
                {el.completed ? "True" : "False"}
              </span>
              <button onClick={() => handleRemoveTodo(el.id)}>remove</button>
            </div>
          ))
        : "don`t have todo"}
    </div>
  );
};

export default TodoList;
