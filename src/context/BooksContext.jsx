import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get(
          "https://gutendex.com/books/?sort=downloads"
        );
        setBooks(res.data.results || []);
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <BooksContext.Provider value={{ books, loading }}>
      {children}
    </BooksContext.Provider>
  );
};
