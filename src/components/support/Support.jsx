import React from "react";
import { memo } from "react";
import img1 from "../../assets/images/support-1.png";
import img2 from "../../assets/images/support-2.png";
import img3 from "../../assets/images/support-3.png";
import "./support.scss";

const Support = () => {
  return (
    <section className="support">
      <div className="container">
        <div className="support__info">
          <div className="support__card">
            <img src={img1} alt="support__img" className="support__img" />
            <h2 className="support__title">FREE SHIPPING</h2>
            <p className="support__text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="support__card">
            <img src={img2} alt="support__img" className="support__img" />
            <h2 className="support__title">100% REFUND</h2>
            <p className="support__text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="support__card">
            <img src={img3} alt="support__img" className="support__img" />
            <h2 className="support__title">SUPPORT 24/7</h2>
            <p className="support__text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Support);
