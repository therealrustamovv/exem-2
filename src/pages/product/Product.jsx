import React, { memo, useEffect } from "react";
import "./product.scss";
import { Link, NavLink, useParams } from "react-router-dom";
import {
  useGetProductQuery,
  useGetProductSingleQuery,
} from "../../context/productApi";
import stars from "../../assets/images/stars.png";
import img1 from "../../assets/images/facebook-white.png";
import img2 from "../../assets/images/twitter-white.png";
import img3 from "../../assets/images/right-img.png";
import { IoCartOutline } from "react-icons/io5";
import { FaRegEye, FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaHeart } from "react-icons/fa6";
import { toggleToWishes } from "../../context/wishlistSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductSkeleton from "../../components/product-skeleton/ProductSkeleton";
import { addToCart, incCart, decCart } from "../../context/cartSlice";

const Product = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetProductSingleQuery(id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let dispatch = useDispatch();
  const wishes = useSelector((state) => state.wishlist.value);
  const carts = useSelector((state) => state.cart.value);

  const { data: allData } = useGetProductQuery();
  let relatedProducts = allData?.products?.slice(-4).map((el) => (
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
    <>
      {isLoading ? (
        <ProductSkeleton />
      ) : (
        <section className="product">
          <div className="container">
            <div className="product__top">
              <Link className="product__top__home" to={"/"}>
                Home
              </Link>
              <p className="product__top__text">/</p>
              <Link className="product__top__home" to={"/"}>
                {data?.category}
              </Link>
              <p className="product__top__text">/</p>
              <Link className="product__top__link">{data?.title}</Link>
            </div>
            <div className="product__info">
              <div className="product__left">
                <img
                  src={data?.images[0]}
                  alt={data?.title}
                  className="product__left__img"
                />
                <div className="product__images">
                  {data?.images?.map((el) => (
                    <img
                      key={el}
                      src={el}
                      alt="product__image"
                      className="product__images__img"
                    />
                  ))}
                </div>
              </div>
              <div className="product__center">
                <h2 className="product__center__title">{data?.title}</h2>
                <div className="product__center__exam">
                  <img
                    src={stars}
                    alt="stars"
                    className="product__center__stars"
                  />
                  <p className="product__center__rev">{data?.rating} reviews</p>
                  <h3 className="product__center__sub">Submit a review</h3>
                </div>
                <div className="product__center__exem">
                  <h2 className="product__center__price">${data?.price}</h2>
                  <div className="product__center__off">
                    <h3 className="product__center__oldprice">
                      ${data?.oldPrice}
                    </h3>
                    <strong className="product__center__strong">24% Off</strong>
                  </div>
                </div>
                <div className="product__center__card">
                  <h2 className="product__center__h2">Availability:</h2>
                  <h2 className="product__center__h2">In stock</h2>
                </div>
                <div className="product__center__card">
                  <h2 className="product__center__h2">Category:</h2>
                  <h2 className="product__center__h2">{data?.category}</h2>
                </div>
                <div className="product__center__card">
                  <h2 className="product__center__h2">Free shipping:</h2>
                </div>
                <div className="product__center__select">
                  <h2 className="product__center__h2">Select Color:</h2>
                  <div className="product__center__colors">
                    <NavLink className="product__center__color product__center__blue"></NavLink>
                    <NavLink className="product__center__color product__center__red"></NavLink>
                    <NavLink className="product__center__color product__center__black"></NavLink>
                    <NavLink className="product__center__color product__center__yellow"></NavLink>
                  </div>
                </div>
                <div className="product__center__size">
                  <h2 className="product__center__h2">Size</h2>
                  <select className="product__center__selected">
                    <option value="XS" className="product__center__option">
                      XS
                    </option>
                    <option value="XS" className="product__center__option">
                      XX
                    </option>
                    <option value="XS" className="product__center__option">
                      XXL
                    </option>
                    <option value="XS" className="product__center__option">
                      XXM
                    </option>
                  </select>
                </div>
                <div className="product__center__quan">
                  {data?.quantity === 1 ? (
                    <>
                      {console.log(data)}
                      <div className="product__center__boxes">
                        <h2 className="product__center__pm">-</h2>
                        <h2 className="product__center__quantity">2</h2>
                        <h2 className="product__center__pm">+</h2>
                      </div>
                      <div className="product__center__end">
                        <button onClick={() => dispatch(toggleToWishes(data))}>
                          {wishes.some((w) => w.id === data?.id) ? (
                            <FaHeart
                              className="product__center__icon"
                              style={{ color: "#33A0FF", fontSize: "20px" }}
                            />
                          ) : (
                            <FaRegHeart
                              className="product__center__icon"
                              style={{ color: "#33A0FF", fontSize: "20px" }}
                            />
                          )}
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="product__center__end">
                      <Link
                        onClick={() => dispatch(addToCart(data))}
                        className="product__center__add"
                      >
                        <IoCartOutline
                          className="product__center__icon"
                          style={{ color: "#33A0FF", fontSize: "20px" }}
                        />
                        <p className="product__center__addtocart">
                          Add To Cart
                        </p>
                      </Link>
                      <button onClick={() => dispatch(toggleToWishes(data))}>
                        {wishes.some((w) => w.id === data?.id) ? (
                          <FaHeart
                            className="product__center__icon"
                            style={{ color: "#33A0FF", fontSize: "20px" }}
                          />
                        ) : (
                          <FaRegHeart
                            className="product__center__icon"
                            style={{ color: "#33A0FF", fontSize: "20px" }}
                          />
                        )}
                      </button>
                    </div>
                  )}
                </div>
                <div className="product__center__column">
                  <div className="product__center__flex">
                    <img
                      src={img1}
                      alt="facebook"
                      className="product__center__white"
                    />
                    <h4 className="product__center__h4">Share on Facebook</h4>
                  </div>
                  <div className="product__center__flex">
                    <img
                      src={img2}
                      alt="facebook"
                      className="product__center__white"
                    />
                    <h4 className="product__center__h4">Share on Twitter</h4>
                  </div>
                </div>
              </div>
              <div className="product__right">
                <h3 className="product__right__h3">BEST SELLER</h3>
                <img
                  style={{ borderRadius: "5px 5px 0px 0px" }}
                  src={data?.images[0]}
                  alt="right__img"
                  className="product__right__img"
                />
                <img
                  src={stars}
                  alt="stars"
                  className="product__right__stars"
                />
                <div className="product__right__prices">
                  <h2 className="product__right__title">${data?.price}</h2>
                  <p className="product__right__text">${data?.oldPrice}</p>
                </div>
              </div>
            </div>
            <div className="product__bottom">
              <div className="product__bottom__columns">
                <h2 className="product__bottom__title">Product Infomation</h2>
                <h2 className="product__bottom__title">
                  Reviews <b className="product__bottom__b">0</b>
                </h2>
                <h2 className="product__bottom__title">Another tab</h2>
              </div>
              <p className="product__bottom__text">
                air max are always very comfortable fit, clean and just perfect
                in every way. just the box was too small and scrunched the
                sneakers up a little bit, not sure if the box was always this
                small but the 90s are and will always be one of my favorites.{" "}
                <br /> <br />
                air max are always very comfortable fit, clean and just perfect
                in every way. just the box was too small and scrunched the
                sneakers up a little bit, not sure if the box was always this
                small but the 90s are and will always be one of my favorites.{" "}
                <br /> <br />
                air max are always very comfortable fit, clean and just perfect
                in every way. just the box was too small and scrunched the
                sneakers up a little bit, not sure if the box was always this
                small but the 90s are and will always be one of my favorites.
              </p>
            </div>
            <div className="product__products">
              <div className="products__info">{relatedProducts}</div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default memo(Product);
