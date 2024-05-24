import React, { memo } from "react";
import { Link, NavLink } from "react-router-dom";
import img from "../../assets/images/logo.png";
import "./nav.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav__info">
          <Link to={"/"} className="nav__left">
            <img src={img} alt="nav__logo" className="nav__img" />
            <h2 className="nav__title">E-Comm</h2>
          </Link>
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink className="nav__link" to={"/"}>
                HOME
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" to={"/bags"}>
                BAGS
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" to={"/sneakers"}>
                SNEAKERS
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" to={"/belt"}>
                BELT
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" to={"/contact"}>
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default memo(Nav);
