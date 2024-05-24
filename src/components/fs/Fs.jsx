import React from "react";
import "./fs.scss";

const Fs = () => {
  return (
    <section className="fs">
      <div className="container">
        <div className="fs__info">
          <div className="fs__card" style={{ position: "relative" }}>
            <h2 className="fs__title">FS - QUILTED MAXI CROSS BAG</h2>
            <div
              style={{ position: "absolute", bottom: "64px" }}
              className="fs__exam"
            >
              <p className="fs__text">$534,33</p>
              <strong className="fs__strong">24% Off</strong>
            </div>
            <h3
              style={{ position: "absolute", bottom: "40px", right: "22px" }}
              className="fs__price"
            >
              $299,43
            </h3>
          </div>
          <div className="fs__card" style={{ position: "relative" }}>
            <h2 style={{ width: "168px" }} className="fs__title">
              FS - Nike Air Max 270 React...
            </h2>
            <div
              style={{ position: "absolute", bottom: "30px", left: "145px" }}
              className="fs__exam"
            >
              <p className="fs__text">$534,33</p>
              <strong className="fs__strong">24% Off</strong>
            </div>
            <h3
              style={{ position: "absolute", top: "20px", right: "15px" }}
              className="fs__price"
            >
              $299,43
            </h3>
          </div>
          <div className="fs__card" style={{ position: "relative" }}>
            <h2 style={{ width: "168px" }} className="fs__title">
              FS - Nike Air Max 270 React...
            </h2>
            <div
              style={{ position: "absolute", top: "112px", left: "52px" }}
              className="fs__exam"
            >
              <p className="fs__text">$534,33</p>
              <strong className="fs__strong">24% Off</strong>
            </div>
            <h3
              style={{ position: "absolute", bottom: "15px", right: "33px" }}
              className="fs__price"
            >
              $299,43
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fs;
