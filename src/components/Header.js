import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { FaUserPlus } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import { BiSearchAlt } from "react-icons/bi";
import { CgMenuGridR } from "react-icons/cg";
import logo from "../logo/logo.png";
import { MovieContext } from "../context/MovieContext";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Login from "./Login";
import "../styles/Header.scss"
import Signup from "./Signup";
const Header = ({ setTitle, categoryTitle }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menu = document.querySelectorAll(".menuContainer");
  const [inputText, setInputText] = useState("");
  const { login ,loginUser ,setLogin} = useContext(MovieContext);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
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
    e.preventDefault();
    menu.forEach((m) => {
      if (!menuOpen) {
        m.style.display = "block";
        setMenuOpen(true);
      } else {
        m.style.display = "none";
        setMenuOpen(false);
      }
    });
  };
  const clickHandler = () => setLogin(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
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

          <li>
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
        <li className="login">
          {!login ? (
            <>
              <li className="movieIcon " onClick={handleShow} style={{marginRight:'15px'}}>
                <FiLogIn />
                Login
              </li>
              <li className="movieIcon" onClick={handleShow2}>
                <FaUserPlus />
                Signup
              </li>
            </>
          ) : (
            <>
              <div class="dropdown">
                <p class="dropbtn">{loginUser[0].name}</p>
                <div class="dropdown-content">
                  <p>{loginUser[0].email}</p>
                  <p>Einstellung</p>
                  <p onClick={clickHandler}>Abnehmen</p>
                </div>
              </div>

              <img src={loginUser[0].image} alt={loginUser[0].id} />
            </>
          )}
        </li>
      </ul>

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
      <button onClick={(e) => buttonHandler(e)}>
        <CgMenuGridR className="menuBtn" />
      </button>

      <Modal show={show} onHide={handleClose} className='modalLogin'>
        <Modal.Header>
          <h2>User Login</h2>
        </Modal.Header>
        <Modal.Body>
          <Login setShow={setShow} />
        </Modal.Body>
        <Modal.Footer>
          <h4 className="modalFooter" onClick={handleClose}>Close</h4>
        </Modal.Footer>
      </Modal>
      <Modal show={show2} onHide={handleClose2} className='modalLogin'>
        <Modal.Header>
          <h2>Singup</h2>
        </Modal.Header>
        <Modal.Body>
          <Signup />
        </Modal.Body>
        <Modal.Footer>
        <h4 className="modalFooter" onClick={handleClose2}>Close</h4>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Header;
