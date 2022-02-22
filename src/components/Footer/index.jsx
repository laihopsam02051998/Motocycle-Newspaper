import React from "react";
import useStyleFooter from "./style.js";
import logo from "./../assets/img/logo-light-145x30.png";
function Footer() {
  const classes = useStyleFooter();
  return (
    <footer>
      <div className={classes.footerContainer}>
        <div className={classes.donors}>
          <img src={logo} alt />
          <p>| Official Sponsors</p>
          <img src={logo} alt />
          <img src={logo} alt />
          <img src={logo} alt />
          <img src={logo} alt />
          <img src={logo} alt />
          <img src={logo} alt />
        </div>
        <div className={classes.footerContent}>
          <div>
            <h3>2kinternational</h3>
            <p>MotoGP Broadcasters</p>
            <p>MotoGP Apps</p>
            <p>No Spolier</p>
          </div>
          <div>
            <h3> </h3>
            <p>MotoGP Broadcasters</p>
            <p>MotoGP Apps</p>
            <p>No Spolier</p>
          </div>
          <div>
            <h3>Contact us</h3>
            <p>MotoGP Broadcasters</p>
            <p>MotoGP Apps</p>
            <p>No Spolier</p>
            <p>No Spolier</p>
          </div>
          <div>
            <h3>About us</h3>
            <p>MotoGP Broadcasters</p>
            <p>MotoGP Apps</p>
            <p>No Spolier</p>
          </div>
          <div>
            <h3>Social Networks</h3>
            <div className={classes.socialContainer}>
              <i className="fab fa-facebook-square" />
              <i className="fab fa-instagram" />
              <i className="fab fa-youtube" />
              <i className="fab fa-twitter" />
              <i className="fab fa-spotify" />
              <i className="fab fa-snapchat-ghost" />
            </div>
          </div>
        </div>
        <div className={classes.lastFooter}>
          <p>
            © 2022 Dorna Sports SL. All rights reserved. All trademarks are the
            property of their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
