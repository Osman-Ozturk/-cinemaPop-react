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
      `https://api.themoviedb.org/3${title.search}${title.name}?api_key=b97e8164329bf3ed7a0f1e99742b4dc4${title.query}${title.language}`
    )
      .then((response) => response.json())
      .then((data) => {
          setMovies(data);
      })
  }, [title]);
  const buttonHandler = (e) => {
    e.preventDefault();
    setTitle({ ...title,language:`&language=${e}`});
    
  };

  return (
    <>
    <div className="languages">
        <label htmlFor="">Movie language</label>
        <select
            required
            name="categories"
            onClick={(e)=>buttonHandler(e.target.value)}
          >
            <option value="en">
            En
           </option>
            <option  value="fr">
            Fr</option>
            <option  value="ja">
            Ja</option>
            
          </select>
          
          
          
        </div>
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
