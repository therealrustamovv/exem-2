import React, { useState } from "react";
import { memo } from "react";
import { Link, NavLink } from "react-router-dom";
import { useGetProductQuery } from "../../context/productApi";
import { FaRegHeart, FaRegEye, FaHeart } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import stars from "../../assets/images/stars.png";
import "./products.scss";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../context/cartSlice";
import { toggleToWishes } from "../../context/wishlistSlice";
import ProductsSkeleton from "../products-skeleton/ProductsSkeleton";
import loadingGif from "../../assets/images/loading.gif";

const Products = () => {
  let dispatch = useDispatch();
  const wishes = useSelector((state) => state.wishlist.value);

  const [limit, setLimit] = useState(8);

  const { data, isLoading, error } = useGetProductQuery({ limit });

  let products = data?.products?.map((el) => (
    <div key={el.id} className="products__card">
      <div className="products__box">
        <img className="products__img" src={el.images[0]} alt={el.title} />
        <div className="products__icons">
          <Link
            onClick={() => dispatch(toggleToWishes(el))}
            className="products__icon"
          >
            {wishes.some((w) => w.id === el.id) ? (
              <FaHeart style={{ color: "#33A0FF", fontSize: "20px" }} />
            ) : (
              <FaRegHeart style={{ color: "#33A0FF", fontSize: "20px" }} />
            )}
          </Link>
          <Link
            onClick={() => dispatch(addToCart(el))}
            className="products__icon"
          >
            <MdOutlineShoppingCart
              style={{ color: "#33A0FF", fontSize: "20px" }}
            />
          </Link>
          <Link to={`/products/${el.id}`} className="products__icon">
            <FaRegEye style={{ color: "#33A0FF", fontSize: "20px" }} />
          </Link>
        </div>
      </div>
      <Link to={`/products/${el.id}`} className="products__exam">
        <h2 className="products__title">{el.title}</h2>
        <img src={stars} alt="stars" className="products__stars" />
        <div className="products__new">
          <h3 className="products__h3">${el.price}</h3>
          <p className="products__text">${el.oldPrice}</p>
          <strong className="products__strong">24% Off</strong>
        </div>
      </Link>
    </div>
  ));
  return (
    <section className="products">
      <div className="container">
        <div className="products__top">
          <h2 className="products__top__title">BEST SELLER</h2>
          <ul className="products__list">
            <li className="products__item">
              <NavLink className="products__link">All</NavLink>
            </li>
            <li className="products__item">
              <NavLink className="products__link">Sunglasses</NavLink>
            </li>
            <li className="products__item">
              <NavLink className="products__link">Bags</NavLink>
            </li>
            <li className="products__item">
              <NavLink className="products__link">Sneakers</NavLink>
            </li>
            <li className="products__item">
              <NavLink className="products__link">Belt</NavLink>
            </li>
          </ul>
        </div>
        <div className="products__info">
          {isLoading ? <ProductsSkeleton /> : products}
        </div>

        {isLoading ? (
          <img src={loadingGif} alt="loading" />
        ) : (
          <button
            onClick={() => setLimit((p) => p + 4)}
            className="products__btn"
          >
            LOAD MORE
          </button>
        )}
      </div>
    </section>
  );
};

export default memo(Products);
