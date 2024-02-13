import React from 'react'
import { IoBag } from "react-icons/io5";

const Card = ({ img, title, star, reviews, newPrice, prevPrice }) => {
  return (
    <div>
      <section class="card">
        <img
          src={img}
          alt={title}
          className="card-img"
        />
        <div class="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
            {star}
            {star}
            {star}
            {star}
            <span className="total-reviews">{reviews}</span>
          </section>
          <section className="card-price">
            <div class="price">
              <del>{prevPrice}</del> {newPrice}
            </div>
            <div class="bag">
              <IoBag />
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Card