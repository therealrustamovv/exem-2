import React from "react";
import { memo } from "react";
import img from "../../assets/images/wishlist-empty.jpg";
import "./empty.scss";

const Empty = () => {
  return (
    <section className="empty">
      <div className="container">
        <div className="empty__info">
          <img src={img} alt="empty" className="empty__img" />
        </div>
      </div>
    </section>
  );
};

export default memo(Empty);
