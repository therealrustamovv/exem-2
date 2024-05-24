import React from "react";
import { memo } from "react";
import img1 from "../../assets/images/latest-1.png";
import img2 from "../../assets/images/latest-2.png";
import img3 from "../../assets/images/latest-3.png";
import "./news.scss";

const News = () => {
  return (
    <section className="news">
      <div className="container">
        <h2 className="news__title">LATEST NEWS</h2>
        <div className="news__info">
          <div className="news__card">
            <img src={img1} alt="news__img" className="news__img" />
            <div className="news__exam">
              <h4 className="news__h4">01 Jan, 2015</h4>
              <h3 className="news__h3">Fashion Industry</h3>
              <p className="news__text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div className="news__card">
            <img src={img2} alt="news__img" className="news__img" />
            <div className="news__exam">
              <h4 className="news__h4">01 Jan, 2015</h4>
              <h3 className="news__h3">Best Design Tools</h3>
              <p className="news__text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div className="news__card">
            <img src={img3} alt="news__img" className="news__img" />
            <div className="news__exam">
              <h4 className="news__h4">01 Jan, 2015</h4>
              <h3 className="news__h3">HR Community</h3>
              <p className="news__text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(News);
