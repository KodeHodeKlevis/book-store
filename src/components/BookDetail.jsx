import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      const res = await axios.get(`https://gutendex.com/books/${id}`);
      setBook(res.data);
    };

    fetchBook();
  }, [id]);

  const addToFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!favorites.some((fav) => fav.id === book.id)) {
      localStorage.setItem("favorites", JSON.stringify([...favorites, book]));
      alert(`${book.title} added to favorites!`);
    } else {
      alert("This book is already in your favorites.");
    }
  };

  if (!book) return <p>Loading book details...</p>;

  return (
    <div>
      <h2>{book.title}</h2>
      {book.formats["image/jpeg"] && (
        <img src={book.formats["image/jpeg"]} alt={book.title} />
      )}
      <p>
        <strong>Author(s):</strong> {book.authors.map((a) => a.name).join(", ")}
      </p>
      <button onClick={addToFavorites}>Add to Favorites</button>
    </div>
  );
};

export default BookDetail;
