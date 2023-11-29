import { useState } from "react";
import { useNavigate } from 'react-router-dom'

const AddNewBooks = ({addNewBookFN}) => {
  const [titleValue, setTitleValue] = useState("HI");
  const [testValue, setTextValue] = useState("");

  const navigate = useNavigate()

  const handleChangeTitle = (event) => {
    setTitleValue(event.target.value)
  };
  const handleChangeText = (event) => {
    setTextValue(event.target.value)
  };
  const handleAddNewBook = () => {
    let newBook = {
        title: titleValue,
        text: testValue,
    }
    addNewBookFN((prev) => [...prev, newBook])
    navigate('/')
  }
  return (
    <div>
      <label>
        title:
        <input type="text" value={titleValue} onChange={handleChangeTitle} />
      </label>

      <label>
        text:
        <input type="text" value={testValue} onChange={handleChangeText} />
      </label>
        <button onClick={handleAddNewBook}>ADD</button>
    </div>
  );
};

export default AddNewBooks;
