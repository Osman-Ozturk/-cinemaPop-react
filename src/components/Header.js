import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { FaUserPlus } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import { BiSearchAlt } from "react-icons/bi";
import { CgMenuGridR } from "react-icons/cg";
import logo from "../logo/logo.png";

const Header = ({ setTitle, categoryTitle }) => {
  const  [menuOpen,setMenuOpen] = useState(false)
  const menu = document.querySelectorAll(".menuContainer");
  const [inputText, setInputText] = useState("");

  const searchHandler = (event) => {
    event.preventDefault();
    setInputText(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    inputText &&
      setTitle({
        name: "",
        search: "/search/movie",
        query: `&query=${inputText}`,
      });
    categoryTitle.current = "Search result for: " + inputText;

    setInputText("");
  };

  const homeHandler = () => {
    setTitle({
      name: `/trending/all/day`,
      search: "/",
      query: "",
    });
    categoryTitle.current = "TRENDING NOW";
  };
  const buttonHandler = (e) => {
    e.preventDefault()
    menu.forEach((m) => {
      if (!menuOpen) {
        m.style.display = "block";
        setMenuOpen(true)
      } else {
        m.style.display = "none";
        setMenuOpen(false)      }
    });
  };

  return (
    <div className="header">
      {/* <div className="listsContainerMain"> */}
      <div className="homeSection">
        <div className="movieIcon logoFont">
          CINEMAPOP
          <img className="logo" src={logo} alt="" />
        </div>
        <ul className="lists_container menuSection">
          <li onClick={homeHandler}>
            <Link className="Link movieIcon" to="/">
              {" "}
              <FaHome />
              Home
            </Link>
          </li>

          <li >
            <Link className="Link movieIcon" to="/contact-us/">
              <RiContactsFill /> Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <ul className="search_container  menuSection">
        <li>
          <form action="" onSubmit={submitHandler} className="movieIcon">
            <BiSearchAlt />
            <input
              type="text"
              onChange={searchHandler}
              value={inputText}
              placeholder="browse movies"
              className="inputText"
            />
          </form>
        </li>
        <li className="movieIcon">
          <FiLogIn />
          Login
        </li>
        <li className="movieIcon">
          <FaUserPlus />
          Signup
        </li>
      </ul>
      {/* </div> */}

      <ul className="menuContainer">
        <li>
          <form action="" onSubmit={submitHandler} className="movieIcon">
          <BiSearchAlt />

            <input
              type="text"
              onChange={searchHandler}
              value={inputText}
              placeholder="browse movies"
              className="inputText"
            />
          </form>
        </li>

        <li onClick={homeHandler}>
        <Link className="Link movieIcon" to="/">
            {" "}
            <FaHome />
            Home
          </Link>
        </li>
        <li>
        <Link className="Link movieIcon" to="/contact-us/">
            <RiContactsFill /> Contact Us
          </Link>
        </li>

        <li className="movieIcon">
          <FaUserPlus />
          Signup
        </li>
        <div>
          <li className="movieIcon">
            <FiLogIn />
            Login
          </li>
        </div>
      </ul>
      <button onClick={e => buttonHandler(e)}>
        <CgMenuGridR className="menuBtn" />
      </button>
    </div>
  );
};

export default Header;
