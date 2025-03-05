import { Link } from "react-router-dom";

const categories = [
  "Fiction",
  "Mystery",
  "Thriller",
  "Romance",
  "Fantasy",
  "Morality",
  "Society",
  "Power",
  "Justice",
  "Adventure",
  "Tragedy",
  "War",
  "Philosophy",
];

const CategoryMenu = () => {
  return (
    <div className="category-menu">
      {categories.map((category) => (
        <Link
          key={category}
          to={`/categories/${category.toLowerCase()}`}
          className="category-link"
        >
          {category}
        </Link>
      ))}
    </div>
  );
};

export default CategoryMenu;
