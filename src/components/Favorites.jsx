import { useState, useEffect } from "react";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem("favorites")) || []);
  }, []);

  const removeFavorite = (id) => {
    const updatedFavorites = favorites.filter((book) => book.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div>
      <h2>Your Favorite Books</h2>
      {favorites.length === 0 ? (
        <p>No favorite books yet.</p>
      ) : (
        <div className="books-list">
          {favorites.map((book) => (
            <div key={book.id} className="book-card">
              <img src={book.formats["image/jpeg"]} alt={book.title} />
              <h3>{book.title}</h3>
              <button onClick={() => removeFavorite(book.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
