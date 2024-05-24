import React, { memo, useEffect, useState } from "react";
import "./cart.scss";
import { useDispatch, useSelector } from "react-redux";
import { IoIosArrowUp, IoIosArrowDown, IoIosClose } from "react-icons/io";
import {
  decCart,
  incCart,
  removeFromCart,
  clearCart,
} from "../../context/cartSlice";
import { Link, useNavigate } from "react-router-dom";
import img1 from "../../assets/images/left.png";
import img2 from "../../assets/images/close.png";
import box1 from "../../assets/images/box-1.png";
import box2 from "../../assets/images/box-2.png";
import box3 from "../../assets/images/box-3.png";
import { toast } from "react-toastify";
import CartEmpty from "../../components/cart-empty/CartEmpty";

const BOT_TOKEN = "6991932375:AAFcQPvFu14Q1Q3YfzuofeHvTzFDMLsmnrQ";
const CHAT_ID = "-1002091450532";
const USER_ID = "1682103610";

// https://api.telegram.org/bot6991932375:AAFcQPvFu14Q1Q3YfzuofeHvTzFDMLsmnrQ/getUpdates
// https://api.telegram.org/bot[your_token]/sendMessage?chat_id=[your chat_id]

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let navitage = useNavigate();
  let dispatch = useDispatch();
  let carts = useSelector((s) => s.cart.value);

  const [modal, setModal] = useState(false);
  const [total, setTotal] = useState(0);
  const cart = useSelector((state) => state.cart.value);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [addres, setAddres] = useState("");
  const [phone, setPhone] = useState("");

  let text = "Ru$tamovv Buyurtma %0A%0A";

  cart.forEach((pro) => {
    text += `Product name: ${pro.title} %0A`;
    text += `Product quantity: ${pro.quantity} %0A`;
    text += `Product price: ${pro.price} %0A%0A`;
  });

  const handleOrder = () => {
    localStorage.removeItem("carts");
    clearCart(carts);
    setModal(false);
    text += `Firstname: ${firstName} %0A`;
    text += `Lastname: ${lastName}  %0A`;
    text += `Email: ${email} %0A`;
    text += `Addres: ${addres} %0A`;
    text += `Phone number: ${phone} %0A%0A`;
    let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}`;
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    navitage("/cart");
    toast.success("Your order has been accepted, thank you!");
  };

  useEffect(() => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    setTotal(total);
  }, [cart]);

  let pr = carts.map((el) => (
    <div key={el.id} className="cart__card">
      <div className="cart__exam">
        <IoIosClose
          onClick={() => dispatch(removeFromCart(el))}
          style={{
            width: "20px",
            height: "20px",
            fontSize: "20px",
            color: "#FF4252",
          }}
        />
        <img src={el.images[0]} alt="cart__img" className="cart__img" />
        <h2 className="cart__title">{el.title}</h2>
      </div>
      <h3 className="cart__h3">${el.price * el.quantity}</h3>
      <div className="cart__box">
        <button
          className="cart__pm"
          disabled={el.quantity <= 1}
          onClick={() => dispatch(decCart(el))}
        >
          -
        </button>
        <p className="cart__text">{el.quantity}</p>
        <button className="cart__pm" onClick={() => dispatch(incCart(el))}>
          +
        </button>
      </div>
      <h3 className="cart__h3">${el.price}</h3>
    </div>
  ));
  return (
    <>
      <div className="contact__top">
        <Link className="contact__home" to={"/"}>
          Home
        </Link>
        <p className="contact__top__text">/</p>
        <Link className="contact__link" to={"/cart"}>
          Cart
        </Link>
      </div>
      {cart.length ? (
        <section className="cart">
          <div className="container">
            <div className="cart__top">
              <h2 className="cart__top__title">PRODUCT</h2>
              <h2 className="cart__top__title">PRICE</h2>
              <h2 className="cart__top__title">QTY</h2>
              <h2 className="cart__top__title">UNIT PRICE</h2>
            </div>
            <div className="cart__info">{pr}</div>
            <div className="cart__bottom">
              <div className="cart__bottom__box">
                <input
                  required
                  type="text"
                  placeholder="Voucher code"
                  className="cart__bottom__input"
                />
                <button className="cart__bottom__btn">Redeem</button>
              </div>
              <div className="cart__bottom__card">
                <div className="cart__bottom__exam">
                  <h4 className="cart__bottom__h4">Subtotal</h4>
                  <h4 className="cart__bottom__h4">${total}</h4>
                </div>
                <div className="cart__bottom__exam">
                  <h4 className="cart__bottom__h4">Shipping fee</h4>
                  <h4 className="cart__bottom__h4">$20</h4>
                </div>
                <div className="cart__bottom__exam">
                  <h4 className="cart__bottom__h4">Coupon</h4>
                  <h4 className="cart__bottom__h4">No</h4>
                </div>
                <div className="cart__bottom__exam">
                  <h3 className="cart__bottom__h3">Total</h3>
                  <p className="cart__bottom__text">${total + 20}</p>
                </div>
                <Link>
                  <button
                    onClick={() => setModal(true)}
                    className="cart__bottom__btn cart__button"
                  >
                    Check out
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <CartEmpty />
      )}
      {modal ? (
        <section className="checkout">
          <form onSubmit={handleOrder} action="" className="checkout__info">
            <div style={{ cursor: "pointer" }} className="checkout__top">
              <img
                onClick={() => setModal(false)}
                src={img1}
                alt="check-back"
                className="checkout__top__img"
              />
              <img
                onClick={() => setModal(false)}
                src={img2}
                alt="check-back"
                className="checkout__top__img"
              />
            </div>
            <h2 className="checkout__title">Make Payment</h2>
            <div className="checkout__bottom">
              <div className="checkout__left">
                <input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  type="text"
                  placeholder="First Name"
                  className="checkout__input"
                />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  type="email"
                  placeholder="Email Address"
                  className="checkout__input"
                />
                <h3 className="checkout__h3">Select Method of Payment</h3>
                <div className="checkout__box">
                  <div className="checkout__card">
                    <img src={box1} alt="box1" className="checkout__box__img" />
                    <p className="checkout__box__text">Credit Card Or Debit</p>
                  </div>
                  <input type="checkbox" className="checkout__checkbox" />
                </div>
                <div className="checkout__box">
                  <div className="checkout__card">
                    <img src={box2} alt="box1" className="checkout__box__img" />
                    <p className="checkout__box__text">Paypal</p>
                  </div>
                  <input type="checkbox" className="checkout__checkbox" />
                </div>
                <div className="checkout__box">
                  <div className="checkout__card">
                    <img src={box3} alt="box1" className="checkout__box__img" />
                    <p className="checkout__box__text">Bank Transfer</p>
                  </div>
                  <input type="checkbox" className="checkout__checkbox" />
                </div>
              </div>
              <div className="checkout__right">
                <input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  type="text"
                  placeholder="Last Name"
                  className="checkout__input"
                />
                <textarea
                  value={addres}
                  onChange={(e) => setAddres(e.target.value)}
                  required
                  placeholder="Address for Delivery"
                  className="checkout__textarea"
                ></textarea>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  type="text"
                  placeholder="Mobile Phone"
                  className="checkout__input"
                />
              </div>
            </div>
            <button className="checkout__btn">Go to Payment</button>
          </form>
        </section>
      ) : (
        <></>
      )}
    </>
  );
};

export default memo(Cart);
