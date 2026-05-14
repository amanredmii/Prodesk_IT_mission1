import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/home";
import MovieDetails from "../components/movie_detail";
import SearchBar from "../components/searchbar";
import Favorites from "../components/fabrouite";

function App() {
  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/movie/:id"
          element={<MovieDetails />}
        />

        <Route
          path="/favorites"
          element={<Favorites />}
        />
      </Routes>

    </BrowserRouter>

  );
}

export default App;