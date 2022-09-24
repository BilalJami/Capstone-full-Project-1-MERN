import React from "react";
import "./Footer.css";
import pic1 from "../photos/pexels-asad-photo-maldives-1268855.jpg";

function Footer() {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <img src={pic1} alt="pakistan" />
        <h3>
          About<span>Happy Tours</span>
        </h3>

        <p className="footer-links">
          <a href="home">Home</a>|<a href="home">Blog</a>|
          <a href="home">About</a>|<a href="home">Contact</a>
        </p>

        <p className="footer-company-name">
          © 2022 Happy Tours Tours Solutions Pvt. Ltd.
        </p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span>309 - Gulberg III, Lahore, Punjab - Pakistan</span>
            Govt Reg # - 400710
          </p>
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <p>+92 300 679 77 88</p>
        </div>
        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <a href="mailto:happyTours@gmail.com">happyTours@gmail.com</a>
          </p>
        </div>
      </div>
      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the Website</span>
          We offer different services for Tours and travel across the world,
          Tours, Management, Travels and Humanities.
        </p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt sint excepturi</p>
        <div className="footer-icons">
          <a href="home">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="home">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="home">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="home">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="home">
            <i className="fa fa-youtube"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
