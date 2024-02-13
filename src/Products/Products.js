import React from "react";
import "./Products.css";


const Products = ({result}) => {
  return (
    <>
      <div class="card-container">
        {result}
      </div>
    </>
  );
};

export default Products;
