import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

function Signup() {
  const { users, setUsers, person, setPerson } =
    useContext(MovieContext);
    function inputChange(e) {
      let dataVonInput = e.target.value;
  
      e.target.name === "password"
        ? setPerson({ ...person, [e.target.name]: parseInt(dataVonInput) })
        : setPerson({ ...person, [e.target.name]: dataVonInput });
    } 

  function addNewPerson(e) {
    e.preventDefault();
    const newArray = [...users, person];
    setUsers(newArray);

    alert("You are registered!");
  }

  return (
    <>
      <form onSubmit={addNewPerson}>
        <div className="m-4">
          <label>User Name</label>
          <input
            type="text"
            placeholder="user name"
            required
            onChange={inputChange}
            name="name"
          />
        </div>
        <div className="m-4" >
          <label>Email address</label>
          <input
            type="email"
            placeholder="Enter email"
            required
            onChange={inputChange}
            name="email"
          />
        </div>

        <div className="m-4" >
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            required
            onChange={inputChange}
            name="password"
          />
        </div>
        <div className="m-4" >
          <label>Choose a profile picture:</label>
          <input
            type="file"
            placeholder="imge"
            onChange={inputChange}
            name="img"
          />
        </div>

        <button variant="primary" type="submit" className="m-4">
          Submit
        </button>
      </form>
    </>
  );
}

export default Signup;
