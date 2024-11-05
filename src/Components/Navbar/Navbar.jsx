import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo4.png";
import { GrCart } from "react-icons/gr";
import { Link } from "react-scroll";
import Home from "../Homes/Home";
import Catalog from "../Catalog/Catalog";
import Photogallery from "../Photogallery/Photogallery";
import Contact from "../Contact/Contact";
import { TfiMenu } from "react-icons/tfi";
import { RxCross2 } from "react-icons/rx";
import Footer from "../Footer/Footer";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <img className="logo-img" src={logo} alt="logo" />
        </div>
        <ul className={open ? "nav-menu nav-menu-open" : "nav-menu"}>
          <li>
            {" "}
            <Link
              style={{ textDecoration: "none", color: "#832729" }}
              to="home"
              smooth={true}
              offset={-70}
              duration={500}
            >
              Home
            </Link>{" "}
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", color: "#832729" }}
              to="catalog"
              smooth={true}
              offset={-70}
              duration={500}
            >
              Catalog
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", color: "#832729" }}
              to="contact"
              smooth={true}
              offset={-80}
              duration={500}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", color: "#832729" }}
              to="photogallery"
              smooth={true}
              offset={-35}
              duration={500}
            >
              Photo Gallery
            </Link>
          </li>
        </ul>
        <div className="nav-login-cart">
        <div className="menu_icon" onClick={toggleMenu}>
          
          {open ? <RxCross2 /> : <TfiMenu />}
        </div>
          <div className="cart-icon">
            <Link style={{ textDecoration: "none", color: "#832729" }} to="/cart">
              {" "}
              <GrCart />
            </Link>
            <div className="nav-cart-count">0</div>
          </div>
        </div>
      </div>
      <div id="home">
        <Home />
      </div>
      <div id="catalog">
        <Catalog />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div id="photogallery">
        <Photogallery />
      </div>
      <div id="Footer">
        <Footer />
      </div>
    </>
  );
};
export default Navbar;
