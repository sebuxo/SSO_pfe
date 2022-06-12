import React from "react";
import "./App.css";
import { useJwt } from "react-jwt";

function App() {
  const [token, setToken] = React.useState(null);
  const [username, setUsername] = React.useState("");
  const { decodedToken, isExpired } = useJwt(token);
  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    params.get("token") && localStorage.setItem("token", params.get("token"));
    localStorage.getItem("token")
      ? setToken(localStorage.getItem("token"))
      : (window.location.href =
          "http://localhost:3001/login?redirecturl=http://localhost:3000");

    console.log("token is", decodedToken);
  });

  return <h1>welcome {decodedToken && decodedToken.username} </h1>;
}

export default App;
