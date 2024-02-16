import React from "react";
import "./Nav.css";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

const Navigation = ({ handleInputChange }) => {
  console.log(handleInputChange)
  return (
    <nav>
      <div class="nav-container">
        <input
          type="text"
          placeholder="Search for your shoes"
          className="search-input"
          onChange={handleInputChange}
        />
      </div>
      <div className="profile-container">
        <a href="#">
          <CiHeart className="nav-icons" />
        </a>
        <a>
          <FaShoppingCart className="nav-icons" />
        </a>
        <a>
          <FaUserAlt className="nav-icons" />
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
