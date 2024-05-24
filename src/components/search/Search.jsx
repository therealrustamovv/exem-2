import React, { memo } from "react";
import "./search.scss";

const Search = () => {
  return (
    <section className="search">
      <div className="container">
        <form action="" className="search__info">
          <input
            type="text"
            required
            placeholder="Search query..."
            className="search__input"
          />
          <button className="search__btn">Search</button>
        </form>
      </div>
    </section>
  );
};

export default memo(Search);
