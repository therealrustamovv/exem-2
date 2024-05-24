import React, { memo } from "react";
import empty from "../../assets/images/cart-empty.png";
import "./cart-empty.scss";

const CartEmpty = () => {
  return (
    <section className="cart__empty">
      <div className="container">
        <div className="cart__empty__info">
          <img className="cart__empty__img" src={empty} alt="cart-empty" />
          <i className="cart__empty__title">oh no !</i>
          <h2 className="cart__empty__text">YOUR CART IS EMPTY</h2>
        </div>
      </div>
    </section>
  );
};

export default memo(CartEmpty);
