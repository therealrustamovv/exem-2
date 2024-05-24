import React, { memo } from "react";
import img from "../../assets/images/logo.png";
import img1 from "../../assets/images/facebook.png";
import img2 from "../../assets/images/twitter.png";
import images from "../../assets/images/brands.png";
import "./footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__card">
            <Link to={"/"} className="footer__box">
              <img src={img} alt="footer__logo" className="footer__img" />
              <h2 className="footer__title">E-Comm</h2>
            </Link>
            <p className="footer__text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever.Since the 1500s, when an unknown printer.
            </p>
          </div>
          <div className="footer__card">
            <h3 className="footer__h3">Follow Us</h3>
            <p className="footer__text">
              Since the 1500s, when an unknown printer took a galley of type and
              scrambled.
            </p>
            <div className="footer__exam">
              <img src={img1} alt="facebook" className="footer__image" />
              <img src={img2} alt="twitter" className="footer__image" />
            </div>
          </div>
          <div className="footer__card">
            <h3 className="footer__h3">Contact Us</h3>
            <p className="footer__text">E-Comm , 4578 </p>
            <p className="footer__text">Marmora Road,</p>
            <p className="footer__text">Glasgow D04 89GR</p>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__card">
            <h3 className="footer__h3">Infomation</h3>
            <p className="footer__text">About Us</p>
            <p className="footer__text">Infomation </p>
            <p className="footer__text">Privacy Policy</p>
            <p className="footer__text">Terms & Conditions</p>
          </div>
          <div className="footer__card">
            <h3 className="footer__h3">Service</h3>
            <p className="footer__text">About Us</p>
            <p className="footer__text">Infomation </p>
            <p className="footer__text">Privacy Policy</p>
            <p className="footer__text">Terms & Conditions</p>
          </div>
          <div className="footer__card">
            <h3 className="footer__h3">My Account</h3>
            <p className="footer__text">About Us</p>
            <p className="footer__text">Infomation </p>
            <p className="footer__text">Privacy Policy</p>
            <p className="footer__text">Terms & Conditions</p>
          </div>
          <div className="footer__card">
            <h3 className="footer__h3">Our Offers</h3>
            <p className="footer__text">About Us</p>
            <p className="footer__text">Infomation </p>
            <p className="footer__text">Privacy Policy</p>
            <p className="footer__text">Terms & Conditions</p>
          </div>
        </div>
        <div className="footer__hr"></div>
        <div className="footer__end">
          <h4 className="footer__h4">
            © 2018 Ecommerce theme by www.bisenbaev.com
          </h4>
          <img src={images} alt="footer__img" className="footer__images" />
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
