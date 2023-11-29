import { useState, useEffect, createContext, lazy } from "react";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AddNewBook from "./pages/AddNewBook";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
// import LoginPage from "./pages/LoginPage";

import './App.css'

const LoginPage = lazy(() => import("./pages/LoginPage"));
const TodosPage = lazy(() => import("./pages/TodosPage"))

export const UserContext = createContext(null);

const App = () => {
  const [books, setBooks] = useState([]);

  const [user, setUser] = useState(null);

  useEffect(() => {
    setBooks((prev) => [
      ...prev,
      {
        title: "Book 1",
        text: "Simple text 1",
      },
      {
        title: "Book 2",
        text: "Simple text 2",
      },
    ]);
  }, []);

  useEffect(() => {
    if(localStorage.getItem("user")) {
      setUser(localStorage.getItem("user"))
    }
  }, [user])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" index element={<Home books={books} />} />
            <Route
              path="add-new"
              element={<AddNewBook setBooks={setBooks} />}
            />
            <Route path="login" element={<LoginPage />} />
            <Route path="todos" element={<TodosPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </UserContext.Provider>
  );
};
export default App;
