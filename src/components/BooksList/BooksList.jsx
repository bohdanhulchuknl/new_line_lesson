import { useContext } from 'react'
import { UserContext } from '../../App';

import BookItem from "../BookItem/BookItem";

const BooksList = ({ books }) => {
  const { user } = useContext(UserContext)
  
  return (
    <div>
      {user}
      {books.map((element) => {
        return <BookItem 
            key={element.title}
            book={element}
        />
      })}
    </div>
  );
};

export default BooksList;
