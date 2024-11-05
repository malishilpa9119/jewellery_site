import React from "react";
import line from "../Assets/catalog-line-img.svg";
import "./Catalog.css";
import menImg from "../Assets/catalog-img1.webp";
import kid from "../Assets/catalog-img2.jpg";
import women from "../Assets/catalog-img3.webp";

const Catalog = () => {
  return (
    <>
      <div className="catalog-page">
        <div className="container">
          <div className="data-section">
            <div className="heading">
              <h2 className="cata-heading">Shop By Gender</h2>
            </div>
            <div className="para">
              <p className="para-text">
                First-class jewelry for first-class Men, Women & Children.
              </p>
            </div>
            <img src={line} alt="line" />
          </div>
          <div className="catalog-img-container">
            <div className="men-catalog">
              <div className="gender-dev">
                <div className="man-img">
                  <img className="Img" src={menImg} alt="menImg" />
                </div>
                <div className="info-div">
                  <h6 className="gender-text">Men</h6>
                  <div className="explore-more">
                    <span>Explore More </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="kid-catalog">
              <div className="gender-dev">
                <div className="kid-img">
                  <img className="Img" src={kid} alt="kid" />
                </div>
                <div className="info-div">
                  <h6 className="gender-text">kid</h6>
                  <div className="explore-more">
                    <span>Explore More </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="women-catalog">
              <div className="gender-dev">
                <div className="women-img">
                  <img className="Img woman" src={women} alt="women" />
                </div>
                <div className="info-div">
                  <h6 className="gender-text">Woman</h6>
                  <div className="explore-more">
                    <span>Explore More </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;
