import { useContext } from "react";
import { BooksContext } from "../context/BooksContext.jsx";
import BooksList from "./BooksList.jsx";

const Category = ({ category }) => {
  const { books } = useContext(BooksContext);

  const filteredBooks = books.filter((book) =>
    book.subjects.includes(category.toLowerCase())
  );

  return (
    <div>
      {filteredBooks.length > 0 ? (
        <BooksList books={filteredBooks} />
      ) : (
        <p>No books found in this category.</p>
      )}
    </div>
  );
};

export default Category;
