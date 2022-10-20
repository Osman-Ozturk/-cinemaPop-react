import { useEffect, useState } from "react";
import "./App.css";
import Movies from "./components/Movies";
import Header from "./components/Header";

function App() {
  const [title, setTitle] = useState({
    name: "/now_playing",
    search: "/",
    query: "",
  });
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3${title.search}movie${title.name}?api_key=b97e8164329bf3ed7a0f1e99742b4dc4${title.query}`
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
        <div className="genre_container">
          <div>Action Movies</div>
          <div>Drama Movies</div>
          <div>Fantasy Movies</div>
          <div>Horror Movies</div>
          <div>Adventure Movies</div>
          <div>Animation Movies</div>
          <div>Comedy Movies</div>
          <div>Crime Movies</div>
          <div>Documentary Movies</div>
          <div>Family Movies</div>
          <div>History Movies</div>
          <div>Music Movies</div>
          <div>Mystery Movies</div>
          <div>Romance Movies</div>
          <div>Sci-Fi Movies</div>
          <div>TV Movies</div>
          <div>Thriller Movies</div>
          <div>War Movies</div>
          <div>Western Movies</div>
        </div>
        <div className="cards">
          {" "}
          {movies.length > 0 ? (
            movies.map((movie) => <Movies key={movies.id} {...movie} />)
          ) : (
            <p>we haven't found your movie</p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
