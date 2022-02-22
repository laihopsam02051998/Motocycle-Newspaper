import React from "react";
import { HexagonButtonNext } from "../Button/HexagonButtonNext";
import { ObjectFitImage } from "../Image";
import useStyleBanner from "./style";
import Logo from "./../assets/img/logo-light-145x30.png";
export function BannerFull({ image, title }) {
  const classes = useStyleBanner();
  return (
    <div>
      <div className={classes.containerBanner}>
        <div className={classes.modelImage}>
          <img
            src={
              image != null
                ? image
                : "https://chayxe.vn/wp-content/uploads/2021/05/chi-phi-that-su-cua-tung-bo-phan-tren-xe-dua-motogp-chayxe-vn-3.jpg"
            }
          />
        </div>
        <div className={classes.modelContentFull}>
          <div className={classes.modelContentHeader}>
            <div style={{ width: "10rem", height: "4rem" }}>
              <ObjectFitImage objectFit={"cover"} src={Logo} />
            </div>
          </div>
          <div className={classes.modelContentFullTitle}>
            <div className={classes.Paragraph}>
              <p>TOP VIDEO</p>
              <p>VIDEOS</p>
            </div>
            <hr />
          </div>
          <div
            className={classes.modelContentButton}
            style={{ paddingLeft: "1rem" }}
          >
            <h4>
              {title != null
                ? title
                : "TALENT OF VALENTINO: VALENCIA 2006 - THE DEFEAT"}
            </h4>
            <HexagonButtonNext />
          </div>
        </div>
      </div>
    </div>
  );
}
