import React, { useEffect, useState } from "react";

import axios from "axios";

const TodosPage = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setIsLoading(true)
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        console.log(res.data);
        setTodos(res.data);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message)
      })
      .finally(() => {
        console.log("FINISH");
        setIsLoading(false)
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error.length) {
    return <div className="text-red-500">{error}</div>
  }

  return (
    <div>
      <h5>TodosPage</h5>
      {todos.length
        ? todos.map((el) => (
            <div key={el.id} className="flex flex-col gap-2">
              <span className="bg-gray-100">{el.title}</span>
            </div>
          ))
        : "don`t have todo"}
    </div>
  );
};

export default TodosPage;
