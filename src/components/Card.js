import React from 'react'
import { CiStar } from "react-icons/ci";
import { IoBag } from "react-icons/io5";

const Card = () => {
  return (
    <div>
      <section class="card">
        <img
          src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
          alt=""
          className="card-img"
        />
        <div class="card-details">
          <h3 className="card-title">shoe</h3>
          <section className="card-reviews">
            <CiStar className="ratings-starts" />
            <CiStar className="ratings-starts" />
            <CiStar className="ratings-starts" />
            <CiStar className="ratings-starts" />
            <span className="total-reviews">4</span>
          </section>
          <section className="card-price">
            <div class="price">
              <del>$300</del> 200
            </div>
            <div class="bag">
              <IoBag />
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

export default Card