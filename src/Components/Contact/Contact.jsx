import React from "react";
import "./Contact.css";
import line from "../Assets/catalog-line-img.svg";
import { FaArrowRightLong } from "react-icons/fa6";
import { SiWhatsapp } from "react-icons/si";
import { IoLocationOutline } from "react-icons/io5";
import { CiVideoOn } from "react-icons/ci";

const Contact = () => {
  return (
    <div className="Contact-page">
      <div className="container">
        <div className="data-section">
          <div className="heading">
            <h2 className="cata-heading">Connect With Us</h2>
          </div>
          <div className="para">
            <p className="para-text">
              We are always available to guide you at your convenience.
            </p>
          </div>
          <img src={line} alt="line" />
        </div>
        <div className="contact-container">
          <div className="contact-card-container">
            <div className="card">
              <div>
                <h5 className="">Connect On</h5>
                <h3>
                  <strong>WhatsApp</strong>
                </h3>
                <button className="btn">
                  <div>Connect</div>
                  <FaArrowRightLong />
                </button>
              </div>
              <div className="contact-img">
                <SiWhatsapp />
              </div>
            </div>
            <div className="card">
              <div>
                <h5 className="">Book an</h5>
                <h3>
                  <strong>Appointment</strong>
                </h3>
                <button className="btn">
                  Book
                  <FaArrowRightLong />
                </button>
              </div>
              <div className="contact-img">
              <IoLocationOutline />
              </div>
            </div>
            <div className="card">
              <div>
                <h5 className="">Schedule a</h5>
                <h3>
                  <strong>Video Call</strong>
                </h3>
                <button className="btn">
                  <div>Schedule</div>
                  <FaArrowRightLong />
                </button>
              </div>
              <div className="contact-img">
              <CiVideoOn />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
