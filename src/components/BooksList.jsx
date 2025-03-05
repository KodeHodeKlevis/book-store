import { Link } from "react-router-dom";

const BooksList = ({ books }) => (
  <div className="books-list">
    {books.length === 0 ? (
      <p>No books found.</p>
    ) : (
      books.map((book) => (
        <div key={book.id} className="book-card">
          <Link
            to={`/book/${book.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img src={book.formats["image/jpeg"]} alt={book.title} />
            <h3>{book.title}</h3>
          </Link>
          <p>
            <strong>Author(s):</strong>{" "}
            {book.authors.map((a) => a.name).join(", ")}
          </p>
        </div>
      ))
    )}
  </div>
);

export default BooksList;
