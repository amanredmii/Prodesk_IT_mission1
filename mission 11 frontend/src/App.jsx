import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/home";
import MovieDetail from "../components/movie_detail";
import MovieForm from "../components/MovieForm";

function App() {
  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/add" element={<MovieForm />} />

        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>

    </BrowserRouter>

  );
}

export default App;