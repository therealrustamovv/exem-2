import React, { memo } from "react";
import { FaChevronDown, FaRegUser, FaRegHeart } from "react-icons/fa";
import { IoCartOutline, IoSearchSharp } from "react-icons/io5";
import "./adv.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Adv = () => {
  const wishes = useSelector((state) => state.wishlist.value);
  const cart = useSelector((state) => state.cart.value);
  return (
    <div className="adv">
      <div className="container">
        <div className="adv__info">
          <div className="adv__left">
            <div className="adv__card">
              <h2 className="adv__title">EN</h2>
              <FaChevronDown
                className="adv__down"
                style={{ color: "#262626", fontSize: "12px" }}
              />
            </div>
            <div className="adv__card">
              <h2 className="adv__title">USD</h2>
              <FaChevronDown
                className="adv__down"
                style={{ color: "#262626", fontSize: "12px" }}
              />
            </div>
          </div>
          <div className="adv__right">
            <Link to={"/admin"}>
              <FaRegUser
                className="adv__icon"
                style={{ color: "#262626", fontSize: "24px" }}
              />
            </Link>
            <Link className="adv__flex" to={"/wishlist"}>
              <FaRegHeart
                className="adv__icon"
                style={{ color: "#262626", fontSize: "24px" }}
              />
              <div className="adv__ab">{wishes.length}</div>
            </Link>
            <Link className="adv__flex" to={"/cart"}>
              <IoCartOutline
                className="adv__icon"
                style={{ color: "#262626", fontSize: "25px" }}
              />
              <div className="adv__ab">{cart.length}</div>
            </Link>
            <h2 className="adv__title adv__del">Items</h2>
            <div className="adv__box">
              <p className="adv__text">$0.00</p>
              <IoSearchSharp
                className="adv__icon"
                style={{ color: "#262626", fontSize: "24px" }}
              />
            </div>
          </div>
          <div className="adv__mob">
            <input
              type="text"
              placeholder="Search Product"
              className="adv__input"
            />
            <IoSearchSharp
              className="adv__search"
              style={{ color: "#40BFFF", fontSize: "22px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Adv);
