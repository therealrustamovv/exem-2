import React, { memo } from "react";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container" style={{ height: "100%" }}>
        <div className="header__info">
          <h2 className="header__title">Super Flash Sale 50% Off</h2>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
