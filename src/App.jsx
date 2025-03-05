import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { BooksProvider } from "./context/BooksContext.jsx";
import Home from "./pages/Home.jsx";
import Categories from "./pages/Categories.jsx";
import FavoritesPage from "./pages/FavoritesPage.jsx";
import BookDetail from "./components/BookDetail.jsx";
import CategoryMenu from "./components/CategoryMenu.jsx";
import "./styles/styles.css";
import "./public/index.html";

const App = () => {
  return (
    <BooksProvider>
      <BrowserRouter>
        <header>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/categories">Categories</Link>
            <Link to="/favorites">Favorites</Link>
          </nav>
          <CategoryMenu />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories/:category" element={<Categories />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/book/:id" element={<BookDetail />} />
        </Routes>
      </BrowserRouter>
    </BooksProvider>
  );
};

export default App;
