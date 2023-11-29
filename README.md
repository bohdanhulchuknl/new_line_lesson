Global state useContext
react-router-dom
@tailwild

npm i react-router-dom
import { BrowserRouter } from "react-router-dom";

      <Routes>
        <Route path="/" index element={<Home books={books}/>} />
        <Route
          path="add-new"
          index
          element={<AddNewBook setBooks={setBooks} />}
        />
        <Route path="*" index element={<NotFound />} />
      </Routes>

       <Link to="add-new">Add New</Link>