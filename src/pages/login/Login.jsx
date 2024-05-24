import React, { memo, useEffect, useState } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import imglLoading from "../../assets/images/loading.gif";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let navigate = useNavigate();

  // let { data: loginData } = useGetLoginQuery();
  // let [createLogin, { data, isLoading, error }] = useCreateLoginMutation();

  const [username, setUsername] = useState("kminchelle");
  const [password, setPassword] = useState("0lelplR");
  const [loading, setLoading] = useState(false);

  const url = "https://dummyjson.com/auth/login";

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(url, { username, password })
      .then((res) => {
        const data = res.data;
        if (data.message === "Error") {
          toast.error("username or password is incorrect");
        } else {
          toast.success("Welcome to admin");
          localStorage.setItem("token", data.token);
          navigate("/admin");
        }
      })
      .catch((err) => toast.error("username or password is incorrect"))
      .finally(() => setLoading(false));
  };

  return (
    <section className="login">
      <div className="container">
        <div className="login__top">
          <Link className="login__home" to={"/"}>
            Home
          </Link>
          <p className="login__text">/</p>
          <Link className="login__link">Login</Link>
        </div>
        <form onSubmit={handleSubmit} action="" className="login__info">
          <div className="login__card">
            <label htmlFor="username" className="login__label">
              Username
            </label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              id="username"
              type="text"
              className="login__input"
            />
          </div>
          <div className="login__card">
            <label htmlFor="password" className="login__label">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              type="text"
              className="login__input"
            />
          </div>
          {loading ? (
            <img
              style={{ height: "70px", objectFit: "contain" }}
              src={imglLoading}
              alt="loading"
            />
          ) : (
            <button className="login__btn">LOGIN</button>
          )}
        </form>
      </div>
    </section>
  );
};

export default memo(Login);
