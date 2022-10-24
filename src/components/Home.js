import Movies from "./Movies";
import Genres from "./Genres";
import Categories from "./Categories";
import { useEffect, useState } from "react";
import { useRef } from "react";

const Home = ({ setTitle, title, categoryTitle }) => {
  const [movies, setMovies] = useState([]);
  const  myFavourites = useRef(null)


  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3${title.search}${title.name}?api_key=b97e8164329bf3ed7a0f1e99742b4dc4${title.query}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(`https://api.themoviedb.org/3${title.search}${title.name}?api_key=b97e8164329bf3ed7a0f1e99742b4dc4${title.query}`);
          setMovies(data);
      })
  }, [title]);

  return (
    <>
      <Genres setTitle={setTitle} categoryTitle={categoryTitle} />
      <Movies
        movies={movies}
        categoryTitle={categoryTitle}
        setTitle={setTitle}
        myFavourites={myFavourites}
      />
      
     
      <Categories setTitle={setTitle} categoryTitle={categoryTitle} setMovies={setMovies} myFavourites={myFavourites}/>

    </>
  );
};

export default Home;
