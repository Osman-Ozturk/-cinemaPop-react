import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Login from "./Login";
import "../styles/Header.scss";
import Signup from "./Signup";
import { MovieContext } from "../context/MovieContext";
const Header = ({ setTitle }) => {
  const { login,setLogin, loginUser } = useContext(MovieContext);
  const [inputText, setInputText] = useState("");
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const searchHandler = (event) => {
    event.preventDefault();
    setInputText(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    inputText !== "" &&
      setTitle({
        name: "",
        search: "/search/",
        query: `&query=${inputText}`,
      });
    setInputText("");
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const clickHandler = () => setLogin(false);

  return (
    <div className="header">
      <ul className="lists_container">
        <li className="logo-container">
          <img src="" alt="logo" className="logo" />
        </li>
        <li>
          <Link to="/" className="router">Home</Link>
        </li>

        <li>
          <Link to="/contact" className="router">Contact Us</Link>
        </li>
        <div className="login">
          {!login ? (
            <div className="button">
              <li>
                <button
                  className="btn"
                  onClick={handleShow}
                  
                >
                  Login
                </button>
              </li>
              <li>
                <button
                  className="btn"
                  onClick={handleShow2}
                >
                  Signup
                </button>{" "}
              </li>
            </div>
          ) : (
            <>
              <div class="dropdown">
                <p class="dropbtn">{loginUser[0].name}</p>
                <div class="dropdown-content">
                  <p >{loginUser[0].email}</p>
                  <p >Einstellung</p>
                  <p onClick={clickHandler}>Abnehmen</p>
                </div>
              </div>

              <img src={loginUser[0].image} alt={loginUser[0].id}/>
            </>
          )}
        </div>
      </ul>

      <ul className="search_container">
        <li>
          <form action="" onSubmit={submitHandler}>
            <input
              type="text"
              onChange={searchHandler}
              value={inputText}
              placeholder="browse movies"
            />
            <button>Search</button>
          </form>
        </li>
        <li>
          
          <select
            required
            name="categories"
            id=""
            onClick={(e) =>
              setTitle({ name: `/${e.target.value}`, search: "/", query: "" })
            }
            onBlur={(e) =>
              setTitle({ name: `/${e.target.value}`, search: "/", query: "" })
            }
          >
            <option value="now_playing">Now playing Movies </option>
            <option value="upcoming">Upcoming Movies </option>
            <option value="popular">Popular Movies </option>
            <option value="top_rated">Top rated Movies </option>
          </select>
        </li>
      </ul>
      <Modal show={show} onHide={handleClose} className='modalLogin'>
        <Modal.Header className="m-4">
          <h2>User Login</h2>{" "}
        </Modal.Header>
        <Modal.Body>
          <Login setShow={setShow} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header>
          <h2>Singup</h2>
        </Modal.Header>
        <Modal.Body>
          <Signup />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose2}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Header;
