import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TokenContext } from "../../context/token.context";
import { useJwt } from "react-jwt";

export default function HomePage() {
  const { token } = React.useContext(TokenContext);
  const { decodedToken, expired } = useJwt(token);
  return (
    <div className="text-center">
      <h1 className="main-title home-page-title">
        welcome to our app {decodedToken && decodedToken.username}
      </h1>
      <Link to="/">
        <button className="primary-button" onClick={() => localStorage.clear()}>
          Log out
        </button>
      </Link>
      <br></br>
      <a href="http://localhost:3001">
        <img
          src="https://du2ha4sdmc25q.cloudfront.net/chinmay2/applications2/src_tcjp6QXgeRivSFg8nhVgCvupKNKQpyLSYuKL/readme/thumbnail.jpg"
          style={{ width: "200px" }}
        ></img>
      </a>
    </div>
  );
}
