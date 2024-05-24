import React, { memo } from "react";
import error from "../../assets/images/error.jpg";
import "./error.scss";

const Error = () => {
  return (
    <section className="error">
      <div className="container">
        <div className="error__info">
          <img src={error} alt="error" className="error__img" />
        </div>
      </div>
    </section>
  );
};

export default memo(Error);
