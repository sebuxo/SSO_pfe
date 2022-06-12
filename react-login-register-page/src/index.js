import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import TokenContext from "./context/token.context";

ReactDOM.render(<TokenContext> <App /> </TokenContext> , document.getElementById("root"));

