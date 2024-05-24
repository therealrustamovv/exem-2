import React from "react";
import { memo } from "react";
import "./feat.scss";
import img from "../../assets/images/feature-img.png";
import stars from "../../assets/images/stars.png";

const Feat = () => {
  return (
    <section className="feat">
      <div className="container">
        <h2 className="feat__title">FEATURED PRODUCTS</h2>
        <div className="feat__info">
          <div className="feat__card">
            <img src={img} alt="feat__img" className="feat__img" />
            <div className="feat__exam">
              <h3 className="feat__h3">Blue Swade Nike Sneakers</h3>
              <img src={stars} alt="stars" className="feat__stars" />
              <div className="feat__prices">
                <strong className="feat__strong">$499</strong>
                <p className="feat__text">$599</p>
              </div>
            </div>
          </div>
          <div className="feat__card">
            <img src={img} alt="feat__img" className="feat__img" />
            <div className="feat__exam">
              <h3 className="feat__h3">Blue Swade Nike Sneakers</h3>
              <img src={stars} alt="stars" className="feat__stars" />
              <div className="feat__prices">
                <strong className="feat__strong">$499</strong>
                <p className="feat__text">$599</p>
              </div>
            </div>
          </div>
          <div className="feat__card">
            <img src={img} alt="feat__img" className="feat__img" />
            <div className="feat__exam">
              <h3 className="feat__h3">Blue Swade Nike Sneakers</h3>
              <img src={stars} alt="stars" className="feat__stars" />
              <div className="feat__prices">
                <strong className="feat__strong">$499</strong>
                <p className="feat__text">$599</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Feat);
