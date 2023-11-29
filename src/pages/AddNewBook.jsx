import { Link } from "react-router-dom";
import AddNewBooks from "../components/AddNewBooks/AddNewBooks";

const AddNewBook = ({ setBooks }) => {
  return (
    <div>
      <h1>AddNewBook</h1>
      <Link to="/">HOME</Link>
      <AddNewBooks addNewBookFN={setBooks} />
    </div>
  );
};

export default AddNewBook;
