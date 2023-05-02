import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { BookList } from "./pages/BookList";
import { Book } from "./pages/Book"

function App() {
  return (
    <>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/books">Books</a></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<Book />} />
      </Routes>
    </>
  );
}

export default App;