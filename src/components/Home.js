import Movies from "./Movies";
import Genres from "./Genres";
import Categories from "./Categories";
import { useEffect, useState } from "react";
import { useRef } from "react";
import "../styles/Home.scss"
const Home = ({ setTitle, title, categoryTitle }) => {
  const [movies, setMovies] = useState([]);
  const myFavourites = useRef(null);
  const [searchMovies, setSearchMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3${title.search}${title.name}?api_key=b97e8164329bf3ed7a0f1e99742b4dc4${title.query}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
      });
  }, [title]);
  const buttonHandler = (e) => {
    e.preventDefault();
    const languageMovie = movies.results.filter(
      (movie) => movie.original_language === e.target.value
    );
    console.log(languageMovie, movies);
    setSearchMovies(languageMovie);
  };
  return (
    <>
        <div className="kategorie">
        <div className="languages">
          <label htmlFor="">Movie language</label>
          <select required name="categories" onClick={buttonHandler}>
            <option value="en">En</option>
            <option value="fr">Fr</option>
            <option value="ja">Ja</option>
            <option value="ko">Ko</option>
          </select>
        </div>
        <Genres setTitle={setTitle} categoryTitle={categoryTitle} />
        </div>
        <Movies
          searchMovies={searchMovies}
          movies={movies}
          categoryTitle={categoryTitle}
          setTitle={setTitle}
          myFavourites={myFavourites}
        />
      <Categories
        setTitle={setTitle}
        categoryTitle={categoryTitle}
        setMovies={setMovies}
        myFavourites={myFavourites}
      />
    </>
  );
};

export default Home;
