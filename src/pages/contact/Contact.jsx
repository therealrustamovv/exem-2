import React, { memo, useEffect } from "react";
import "./contact.scss";
import { Link } from "react-router-dom";
import Search from "../../components/search/Search";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="contact">
      <div className="container">
        <div className="contact__top">
          <Link className="contact__home" to={"/"}>
            Home
          </Link>
          <p className="contact__top__text">/</p>
          <Link className="contact__link" to={"/contact"}>
            Contact Us
          </Link>
        </div>
        <div className="contact__info">
          <div className="contact__left">
            <h2 className="contact__title">Get in touch</h2>
            <p className="contact__text">contact@e-comm.ng</p>
            <p className="contact__text">+234 4556 6665 34</p>
            <p className="contact__text">
              20 Prince Hakerem Lekki Phase 1, Lagos.
            </p>
          </div>
          <form action="" className="contact__right">
            <div className="contact__box">
              <label className="contact__label" htmlFor="fn">
                Fullname
              </label>
              <input
                type="text"
                placeholder="James Doe"
                id="fn"
                className="contact__input"
                required
              />
            </div>
            <div className="contact__box">
              <label className="contact__label" htmlFor="email">
                Email
              </label>
              <input
                type="text"
                placeholder="jamesdoe@gmail.com"
                id="email"
                className="contact__input"
                required
              />
            </div>
            <div className="contact__box">
              <label className="contact__label" htmlFor="message">
                Message
              </label>
              <textarea
                type="text"
                placeholder="Type your message"
                id="message"
                className="contact__textarea"
                required
              />
            </div>
          </form>
        </div>
        <Search />
      </div>
    </section>
  );
};

export default memo(Contact);
