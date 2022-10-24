import { useState, useEffect, useContext } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { Route , Routes } from "react-router-dom";
import Contact from "./components/Contact";
import { MovieContext } from "./context/MovieContext";

function App() {
  const {movies,setMovies,login,setLogin} =useContext(MovieContext);
  const [title, setTitle] = useState({
    name: "/popular",
    search: "/",
    query: "",
  });
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3${title.search}movie${title.name}?api_key=b97e8164329bf3ed7a0f1e99742b4dc4${title.query}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, [title]);
  // useEffect(()=>{
  //   localStorage.setItem("login",JSON.stringify(login));
  // },[login])
  // useEffect(()=>{
  //     const getLocal = localStorage.getItem("login");
  //     const initialValue = JSON.parse(getLocal)

  //   },[])

  return (
    <div className="App">
      
      <Header setTitle={setTitle} />
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home movies={movies}  setTitle={setTitle}/>} />
      </Routes>
    </div>
  );
}

export default App;
