import React, { memo, useEffect } from "react";
import "./admin.scss";
import { Link, useNavigate } from "react-router-dom";

const Admin = () => {
  let navigate = useNavigate();
  let handleRemove = () => {
    navigate("/login");
    localStorage.removeItem("token");
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="admin">
      <div className="container">
        <div className="login__top">
          <Link className="login__home" to={"/"}>
            Home
          </Link>
          <p className="login__text">/</p>
          <Link className="login__link">Admin</Link>
        </div>
        <h2 className="admin__title">Admin panel</h2>
        <p className="admin__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          cupiditate inventore, deserunt magnam provident dolores blanditiis
          ullam iusto! Assumenda dolor quis itaque commodi tempore laudantium
          quam deleniti id consequatur. Minus delectus officia unde quam nulla
          ut. Odit quibusdam quis aut enim delectus blanditiis, quisquam quidem
          maiores suscipit. Dignissimos, ut repudiandae! <br /> <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          cupiditate inventore, deserunt magnam provident dolores blanditiis
          ullam iusto! Assumenda dolor quis itaque commodi tempore laudantium
          quam deleniti id consequatur. Minus delectus officia unde quam nulla
          ut. Odit quibusdam quis aut enim delectus blanditiis, quisquam quidem
          maiores suscipit. Dignissimos, ut repudiandae! <br /> <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          cupiditate inventore, deserunt magnam provident dolores blanditiis
          ullam iusto! Assumenda dolor quis itaque commodi tempore laudantium
          quam deleniti id consequatur. Minus delectus officia unde quam nulla
          ut. Odit quibusdam quis aut enim delectus blanditiis, quisquam quidem
          maiores suscipit. Dignissimos, ut repudiandae!
        </p>
        <button onClick={handleRemove} className="admin__btn">
          Log out
        </button>
      </div>
    </section>
  );
};

export default memo(Admin);
