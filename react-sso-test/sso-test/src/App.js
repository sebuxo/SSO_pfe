import React from "react";
import "./App.css";
import { useJwt } from "react-jwt";

function App() {
  const [token, setToken] = React.useState(null);
  const [firstTime, setFirstTime] = React.useState(0);
  const [username, setUsername] = React.useState("");
  const { decodedToken, isExpired } = useJwt(token);
  React.useEffect(() => {
    if (firstTime === 0) {
      localStorage.clear();
      setFirstTime(1);
    } else {
      const params = new URLSearchParams(window.location.search);
      params.get("token") && localStorage.setItem("token", params.get("token"));
      localStorage.getItem("token")
        ? setToken(localStorage.getItem("token"))
        : (window.location.href =
            "http://localhost:3000/login?redirecturl=http://localhost:3001");

      console.log("token is", decodedToken);
    }
  });

  return <h1>welcome {decodedToken && decodedToken.username} </h1>;
}

export default App;
