import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodos } from "../app/TodosSlice";
import axios from "axios";
import TodoList from "../components/TodoList/TodoList";
import TodosInputFilter from "../components/TodosInputFilter/TodosInputFilter";

const TodosPage = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        // console.log(res.data);
        dispatch(addTodos(res.data));
      })
      .catch((err) => {
        // console.log(err);
        setError(err.message);
      })
      .finally(() => {
        // console.log("FINISH");
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error.length) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div>
      <h5>TodosPage</h5>
      <TodosInputFilter/>
      <TodoList />
    </div>
  );
};

export default TodosPage;
