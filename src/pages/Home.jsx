import { useContext } from "react";
import { Link } from "react-router-dom";
import BooksList from "../components/BooksList/BooksList";
import { UserContext } from "../App";

const Home = ({ books }) => {
  const { user, setUser } = useContext(UserContext);

  const handleLogOut = () => {
    localStorage.removeItem('user')
    setUser(null);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {user ? (
        <div>
          <Link to="add-new">Add New</Link>
          <button onClick={handleLogOut}>Log OUT</button>
        </div>
      ) : (
        <div>
          <Link to="login">Login</Link>
        </div>
      )}

      <h1 className="text-2xl text-purple-500">HOME {user}</h1>
      <BooksList books={books} /> 
    </div>
  );
};

export default Home;
