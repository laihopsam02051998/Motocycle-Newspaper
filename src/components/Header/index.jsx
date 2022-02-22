import React, { useState, useEffect, memo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "./../assets/img/logo-light-145x30.png";
import useStyleHeader from "./style";

function Header() {
  const classes = useStyleHeader();
  const info = JSON.parse(localStorage.getItem("credential"));
  // CHOOSE TAB IN HEADER
  const [isTouch, setIsTouch] = useState(false);
  const [avatarContent, setAvatarContent] = useState(false);
  const [isLogin, setIsLogin] = useState(null);

  const admin = useSelector((state) => {
    return state.UserReducer.credentials;
  });

  useEffect(() => {
    document.getElementById("Touch").classList.toggle("active");
  }, [isTouch]);

  useEffect(() => {
    info !== null ? setIsLogin(info) : setIsLogin(admin);
  }, [admin]);

  return (
    <section className={classes.header}>
      <div className={classes.header__menu}>
        <div className={classes.header__left}>
          <ul>
            <li>
              <Link to="/">
                TRANG CHỦ
                {/* <img src={logo} alt /> */}
              </Link>
            </li>
            <li id="menuModel">
              <Link to="/BookingService">VIDEO</Link>
            </li>
            <li>
              <Link to="/Advertisement">KẾT QUẢ</Link>
            </li>
            <li>
              <Link to="/AboutUs">LỊCH THI ĐẤU</Link>
            </li>
            {/* <li>
              <Link to="/AboutUs">GIẢI ĐẤU</Link>
            </li> */}
          </ul>
        </div>
        <div className={classes.header__right}>
          <ul>
            {/* <li>
              <Link to="/News">TIN TỨC</Link>
            </li> */}
            <li>
              <Link to="/Biker">TAY ĐUA</Link>
            </li>
            <li>
              <Link to="/AboutUs">BẢNG XẾP HẠNG</Link>
            </li>
            <li>
              <Link to="/Contact">KĨ THUẬT ĐUA</Link>
            </li>

            <li>
              <div
                className={classes.Touch}
                onClick={() => setIsTouch(!isTouch)}
                id="Touch"
              />
            </li>
          </ul>
        </div>
      </div>
      <div
        className={
          isTouch === true ? classes.touchContent : classes.touchContentHide
        }
      >
        <div className={classes.serviceHeader}>
          <h2>DỊCH VỤ</h2>
          <Link to="/ModelProduct" onClick={() => setIsTouch(false)}>
            <p> DRAG</p>
          </Link>
          <Link to="/ModelProduct" onClick={() => setIsTouch(false)}>
            <p> TRACK</p>
          </Link>

          <Link to="/PaintProtection" onClick={() => setIsTouch(false)}>
            <p> GOKART</p>
          </Link>
          <Link to="/PaintProtection" onClick={() => setIsTouch(false)}>
            <p> MEETING</p>
          </Link>
        </div>
        <div className={classes.serviceHeader}>
          <h2>HỢP TÁC</h2>
          <p>QUẢNG BÁ SẢN PHẨM</p>
          <p>ĐẶT BẢNG QUẢNG CÁO</p>
          <p>QUẢNG PHỐI SẢN PHẨM</p>
        </div>
        <div className={classes.serviceHeader}>
          <h2>SHOP</h2>
          <p>PHỤ KIỆN LƯU NIỆM</p>
          <p>LINH KIỆN XE</p>
        </div>
        <div className={classes.serviceHeader}>
          <h2>DRAG</h2>
          <p>KỶ LỤC</p>
          <Link to="/DetailAccessory" onClick={() => setIsTouch(false)}>
            <p>CÂU LẠC BỘ</p>
          </Link>
          <Link to="/NewDetail" onClick={() => setIsTouch(false)}>
            <p>TIN TỨC</p>
          </Link>
        </div>
        <div className={classes.laguageHeader}>
          <h2>NGÔN NGỮ</h2>
          <p>VIETNAM</p>
          <p>ENGLISH</p>
        </div>
      </div>
    </section>
  );
}
export default memo(Header);
