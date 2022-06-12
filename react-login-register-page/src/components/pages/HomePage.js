import  React , {useState} from "react";
import { Link } from "react-router-dom";
import { TokenContext } from "../../context/token.context";




export default function HomePage() {
  const  {token} = React.useContext(TokenContext) 
  return (
    <div className="text-center">
      <h1 className="main-title home-page-title">welcome to our app {token} </h1>
      <Link to="/">
        <button className="primary-button">Log out</button>
      </Link>
    </div>
  );
}
