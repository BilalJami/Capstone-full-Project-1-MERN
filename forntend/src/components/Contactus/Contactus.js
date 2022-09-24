import React from "react";
import "./Contactus.css";
import pic1 from "../photos/china.jpg";

function Contactus() {
  return (
    <>
      <div className="about-section container">
        <h1>Contact Us Page</h1>
        <p>Our Address: Gulberg III lahore Firdoos Markeet </p>
        <p>
          <a href="mailto:Happytours554@gmail.com">Happytours554@gmail.com</a>
        </p>
      </div>

      <h2 style={{ textAlign: "center" }}>Our Addresses </h2>
      <div className="row container">
        <div className="column">
          <div className="card">
            <img src={pic1} alt="Jane" style={{ width: "100%" }} />
            <div className="container">
              <h2>China</h2>
              <p className="title">Our First Company Address</p>
              <p>many of our Company functional areas are working here.</p>
              <p>jane@example.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src={pic1} alt="Mike" style={{ width: "100%"  }} />
            <div className="container">
              <h2>London</h2>
              <p className="title">Our Second Startup in London</p>
              <p>This company address for Europian Function ares</p>
              <p>mike@example.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img
              src={pic1}
              alt="John"
              style={{ width: "100%", height: "10%" }}
            />
            <div className="container">
              <h2>Lahore, Pakistan</h2>
              <p className="title">
                Lahore, Punjab, Pakistan Company.
              </p>
              <p>
                Employes are Hardworker and Fully Support to
                All World Area's.
              </p>
              <p>Lahore@example.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contactus;
