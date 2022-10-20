import { useEffect, useState } from "react";
import "./App.css";
import Movies from "./components/Movies";
import Header from "./components/Header";
import Genres from "./components/Genres";
function App() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState({
    name: `/trending/all/day`,
    search: "/",
    query: "",
  });

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3${title.search}${title.name}?api_key=b97e8164329bf3ed7a0f1e99742b4dc4${title.query}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, [title]);

  return (
    <>
      <Header setTitle={setTitle} />
      <div className="App">
        <Genres setTitle={setTitle} />
        <Movies movies={movies} />
      </div>
    </>
  );
}

export default App;
