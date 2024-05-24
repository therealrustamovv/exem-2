import React, { memo } from "react";
import "./pr-skeleton.scss";

const ProductSkeleton = () => {
  return (
    <section className="pr__skeleton">
      <div className="container">
        <div className="skeleton__info">
          <div className="skeleton__left">
            <div className="skeleton__left__img skeleton__anime"></div>
            <div className="skeleton__images">
              <div className="skeleton__image skeleton__anime"></div>
              <div className="skeleton__image skeleton__anime"></div>
              <div className="skeleton__image skeleton__anime"></div>
              <div className="skeleton__image skeleton__anime"></div>
            </div>
          </div>
          <div className="skeleton__right skeleton__anime"></div>
          <div className="skeleton__end skeleton__anime"></div>
        </div>
      </div>
    </section>
  );
};

export default memo(ProductSkeleton);
