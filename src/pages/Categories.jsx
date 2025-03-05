import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BooksList from "../components/BooksList.jsx";

const Categories = () => {
  const { category } = useParams();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategoryBooks = async () => {
      try {
        const res = await axios.get(
          `https://gutendex.com/books/?topic=${category}`
        );
        setBooks(res.data.results);
      } catch (error) {
        console.error("Error fetching category books:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryBooks();
  }, [category]);

  return (
    <div>
      <h2>{category.charAt(0).toUpperCase() + category.slice(1)} Books</h2>
      {loading ? <p>Loading...</p> : <BooksList books={books} />}
    </div>
  );
};

export default Categories;
