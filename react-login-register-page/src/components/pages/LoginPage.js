import axios from "axios";
import React from "react";
import { Link , useHistory } from "react-router-dom";
import "../../App.css";
import { TokenContext } from "../../context/token.context";



export default function SignInPage() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const {token,setToken} = React.useContext(TokenContext)

const history = useHistory();
  async function Login() {
    const data = await axios.post("http://localhost:8080/login", {
      email,
      password,
    });
    if(data){
    await window.localStorage.setItem("token",(Object.values(Object.values(data)[0])[0].token));
    setToken(Object.values(Object.values(data)[0])[0].token);
        history.push('/home');
    }

  }
  return (
    <div className="text-center m-5-auto">
      <h2>Sign in to us</h2>
      <div className="ex-form">
        <p>
          <label>Username or email address</label>
          <br />
          <input
            type="text"
            name="first_name"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </p>
        <p>
          <label>Password</label>
          <input
            type="password"
            name="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
        <p>
          <button id="sub_btn" type="submit" onClick={Login}>
            Login
          </button>
        </p>
      </div>
      <footer>
        <p>
          First time? <Link to="/register">Create an account</Link>.
        </p>
        <p>
          <Link to="/">Back to Homepage</Link>.
        </p>
      </footer>
    </div>
  );
}
