import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import styles from "./Login.module.css";
import { getLocalUser } from "../services/localStorage";
import userLogo from "../images/user-logo.jpg";

function Login() {
  const [name, setName] = useState("");
  const [rollno, setRollno] = useState("");
  const [nError, setNError] = useState("");
  const [rError, setRError] = useState("");

  const navi = useNavigate();

  const { login } = useAuth();

  useEffect(() => {
    const user = getLocalUser();
    if (user) {
      login(user.name, user.rollno);
      navi("/home");
    }
  }, []);

  function formdHandler(e) {
    e.preventDefault();

    if (name && rollno) {
      if (name) setNError("");
      if (
        (2105001 <= rollno && 2105007 >= rollno) ||
        (2105009 <= rollno && 2105036 >= rollno) ||
        (2105038 <= rollno && 2105061 >= rollno)
      ) {
        login(name, rollno);
      } else {
        setRError("invalid rollno");
      }
    } else {
      if (!name) {
        setNError("must enter a name");
      } else {
        setNError("");
      }
      if (!rollno) {
        setRError("must enter a Rollno");
      } else {
        setRError("");
      }
    }
  }

  return (
    <div className={styles.login_container}>
      <form className={styles.login} onSubmit={formdHandler}>
        <img src={userLogo} alt="" />
        <h1>Student Login</h1>

        <div className="input1">
          <h2>Username</h2>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={nError ? { borderColor: "red" } : {}}
            placeholder="Enter a your Name"
          />
          <p>{nError && nError}</p>
        </div>

        <div className="input2">
          <h2>Roll number</h2>
          <input
            type="number"
            value={rollno}
            onChange={(e) => setRollno(e.target.value)}
            style={rError ? { borderColor: "red" } : {}}
            placeholder="Enter a Rollno"
          />
          {<p>{rError && rError}</p>}
        </div>
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
