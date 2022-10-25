import { useContext, useState } from "react";
import { MovieContext } from "../context/MovieContext";
import "../styles/Login.scss"
function Login({ setShow }) {
  const {users , setLogin, setLoginUser ,login,loginUser} = useContext(MovieContext);
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
      setLoginUser(findUser);
      localStorage.setItem("login",JSON.stringify(true));
      localStorage.setItem("loginUser",JSON.stringify(findUser));
    } else {
      alert("wrong passport or email address");
    }
  };

  return (
    <form className="loginForm">
      <div className="inputDiv">
        <label >Email address</label>
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

      <div >
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          onChange={inputChange}
          name="password"
        />
      </div>
      <div>
      <h3
        onClick={submitHandler}
      >
        Login
      </h3>

      </div>

      
    </form>
  );
}

export default Login;