import React from "react";
import { memo } from "react";
import "./skeleton.scss";

const ProductsSkeleton = () => {
  return (
    <section className="skeleton__wrapper">
      {Array(8)
        .fill("")
        .map((_, inx) => (
          <div key={inx} className="skeleton__card">
            <div className="skeleton__img skeleton__anime"></div>
            <div className="skeleton__title skeleton__anime"></div>
            <div className="skeleton__stars skeleton__anime"></div>
            <div className="skelton__price"></div>
          </div>
        ))}
    </section>
  );
};

export default memo(ProductsSkeleton);
