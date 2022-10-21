import { useState } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Login from "./Login";

const Header = ({ setTitle }) => {
  const [inputText, setInputText] = useState("");
  const [show, setShow] = useState(false);

  const searchHandler = (event) => {
    event.preventDefault();
    setInputText(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    event.target.value !== "" &&
      setTitle({
        name: "",
        search: "/search/",
        query: `&query=${inputText}`,
      });
    setInputText("");
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="header">
      <ul className="lists_container">
        <li className="logo-container">
          <img src="" alt="logo" className="logo" />
        </li>
        <li>
          <Link to="/">Home</Link>
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
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
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
          </form>
        </li>
        <li>
          <Button className="btn btn-primary text-white" onClick={handleShow}>
            Login
          </Button>
        </li>
        <li>Signup</li>
      </ul>
       <Modal show={show} onHide={handleClose}>
        <Modal.Header className="m-4"><h2>User Login</h2> </Modal.Header>
        <Modal.Body>
        <Login />

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal> 
        
    </div>
  );
};

export default Header;
