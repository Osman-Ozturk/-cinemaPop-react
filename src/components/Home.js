import React from "react";
import Movies from "./Movies";
import { useState } from "react";
import genres from "./genres.json";
import "../styles/Home.scss";
function Home({ movies, setTitle }) {
  const [action, setAction] = useState([]);

  const clickHandler = (e) => {
    e.preventDefault();
    const actionMovies = movies.filter((movie) =>
      movie.genre_ids.includes(Number(e.target.id))
    );

    setAction(actionMovies);
    setTitle({ name: "/now_playing", search: "/", query: "" });
  };
  const buttonHandler = (e) => {
    e.preventDefault();
    const actionMovies = movies.filter(
      (movie) => movie.original_language === e.target.value
    );

    setAction(actionMovies);
    setTitle({ name: "/now_playing", search: "/", query: "" });
  };
  return (
    <div className="Home">
      <div>
        <div className="languages">
          <button onClick={() => setAction(movies)}>All</button>
          <button onClick={buttonHandler} value="en">
            En
          </button>
          <button onClick={buttonHandler} value="fr">
            Fr
          </button>
          <button onClick={buttonHandler} value="ja">
            Ja
          </button>
        </div>
        <div className="genre_container">
          {genres.map((element) => (
            <div id={element.id} onClick={clickHandler}>
              {element.name}{" "}
            </div>
          ))}
        </div>
      </div>
      <div className="cards">
        {action.length > 0
          ? action.map((movie) => <Movies key={movies.id} {...movie} />)
          : movies.map((movie) => <Movies key={movies.id} {...movie} />)}
      </div>
    </div>
  );
}

export default Home;
