import { useState, useContext } from "react";
import { BooksContext } from "../context/BooksContext.jsx";
import BooksList from "../components/BooksList.jsx";
import SearchBar from "../components/SearchBar.jsx";

const Home = () => {
  const { books, loading } = useContext(BooksContext);
  const [filteredBooks, setFilteredBooks] = useState([]);

  return (
    <div>
      <h2>Search for a Book</h2>
      <SearchBar books={books} setFilteredBooks={setFilteredBooks} />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {filteredBooks.length > 0 ? (
            <>
              <h3>Search Results</h3>
              <BooksList books={filteredBooks} />
            </>
          ) : (
            <>
              <h3>Popular Books</h3>
              <BooksList books={books} />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Home;
