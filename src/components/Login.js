import { useContext, useState } from "react";
import { MovieContext } from "../context/MovieContext";
import "../styles/Login.scss"
function Login({ setShow }) {
  const { users, setLogin, setLoginUser } = useContext(MovieContext);
  const [benutzer, setBenutzer] = useState({ email: "", password: "" });
  function inputChange(e) {
    let dataVonInput = e.target.value;
    e.target.name === "password"
      ? setBenutzer({ ...benutzer, [e.target.name]: parseInt(dataVonInput) })
      : setBenutzer({ ...benutzer, [e.target.name]: dataVonInput });
  }
  const submitHandler = (e) => {
    e.preventDefault();
    const findUser = users.filter(
      (user) =>
        user.email === benutzer.email &&
        user.password === Number(benutzer.password)
    );
    if (findUser.length > 0) {
      setLogin(true);
      setShow(false);
    } else {
      alert("wrong passport or email address");
    }
    setLoginUser(findUser);
  };

  return (
    <form className="loginForm">
      <div className="m-4">
        <label className="mb-2">Email address</label>
        <input
          type="email"
          placeholder="Enter email"
          required
          onChange={inputChange}
          name="email"
        />
        <p className="text-muted mt-2">
          We'll never share your email with anyone else.
        </p>
      </div>

      <div className="m-4">
        <label className="mb-2">Password</label>
        <input
          type="password"
          placeholder="Password"
          onChange={inputChange}
          name="password"
        />
      </div>

      <button
      className="btn btn-primary m-4"
        variant="primary"
        type="submit"
        onClick={submitHandler}
      >
        Login
      </button>
    </form>
  );
}

export default Login;
