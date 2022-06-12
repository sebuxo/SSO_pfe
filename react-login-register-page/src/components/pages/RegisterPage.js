import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

export default function SignUpPage() {
  async function create() {
    const data = await axios.post("http://localhost:8080/signup", {
      userName,
      email,
      password,
    });
    console.log(data.map((e) => console.log(e)));
  }
  const [userName, setUserName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <div className="text-center m-5-auto">
      <h2>Join us</h2>
      <h5>Create your personal account</h5>
      <form action="/home">
        <p>
          <label>Username</label>
          <br />
          <input
            type="text"
            name="first_name"
            required
            onChange={(e) => setUserName(e.target.value)}
          />
        </p>
        <p>
          <label>Email address</label>
          <br />
          <input
            type="email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </p>
        <p>
          <label>Password</label>
          <br />
          <input
            type="password"
            name="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
        <p>
          <button id="sub_btn" type="button" onClick={create}>
            Register
          </button>
        </p>
      </form>
      <footer>
        <p>
          <Link to="/">Back to Homepage</Link>.
        </p>
      </footer>
    </div>
  );
}
