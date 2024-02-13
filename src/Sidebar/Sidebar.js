import React from "react";
import Category from "./Category/Category";
import Colors from "./Colors/Colors";
import Price from "./Price/Price";
import "./Sidebar.css";

const Sidebar = ({ handleChange }) => {
  // console.log(handleChange)
  return (
    <div className="sidebar">
      <div class="logo-container">
        <h1>🛒</h1>
      </div>
      <Category handleChange={handleChange}/>
      <Price handleChange={handleChange}/>
      <Colors handleChange={handleChange}/>
    </div>
  );
};

export default Sidebar;
