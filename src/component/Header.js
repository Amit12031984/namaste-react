import { useState } from "react";
import { HEAD_LOGO } from "../utils/constants";

const Header = () => {
  const [loginText, setLoginText] = useState("Login");

  const login = () => {
    loginText === "Login" ? setLoginText("Logout") : setLoginText("Login");
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={HEAD_LOGO} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="btn-login"
            onClick={() => {
              login();
            }}
          >
            {loginText}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
