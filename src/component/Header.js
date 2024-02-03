import { useState, useContext } from "react";
import { HEAD_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginText, setLoginText] = useState("Login");

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const login = () => {
    loginText === "Login" ? setLoginText("Logout") : setLoginText("Login");
  };

  const userData = useContext(UserContext);

  return (
    <div className="flex justify-between bg-gray-100">
      <div className="flex align-middle">
        <img className="w-24" src={HEAD_LOGO} />
      </div>
      <div className="flex align-middle">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grosery">Grosery</Link>
          </li>
          <li className="px-4 font-bold">
            <Link to="/cart">Cart({cartItems.length} items)</Link>
          </li>
          <button
            className="px-4"
            onClick={() => {
              login();
            }}
          >
            {loginText}
          </button>
          <li className="px-4">
            <span>{userData.loggedInUser}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
