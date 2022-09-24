import React from "react";
import "./About.css";
import b1 from "../photos/boss1.jpg";
import b2 from "../photos/boss2.jpg";
import b3 from "../photos/boss3.jpg";

function About() {
  return (
    <>
      <section className="aboutus">
        <div className="container">
          <div className="about-section">
            <h1>Who We Are?</h1>
            <p style={{ fontSize: "13px" }}>
              Pakistan Travel & Tours is one of the leading Tour Operators in
              Pakistan, providing comprehensive services for groups and
              individuals from and to the country.
            </p>
            <p style={{ fontSize: "16px" }}>
              Our specialized departments offer a diversity of services. Every
              department works independently to provide the best service to our
              customers, targeting their friendship and a long-lasting
              relationship. All services and departments are located at our
              office in Lahore, starting with the Management and Administrative
              Department, Operational Department, Reservation Department,
              Product Development, Sales & Marketing, Inbound, Outbound &
              Ticketing Departments, giving us a competitive advantage by being
              all under one roof.
            </p>
          </div>

          <h2 style={{ textAlign: "center" }}>Our Team</h2>
          <div className="row">
            <div className="column">
              <div className="card">
                <img
                  src={b1}
                  alt="Jane"
                  style={{ width: "100%" }}
                />
                <div className="container">
                  <h2>Dr Farookh Sabtani</h2>
                  <p className="title">CEO & Founder</p>
                  <p style={{ fontSize: "16px" }}>
                    Dr Farookh Sabtani is a Pakistani tourism serving as the
                    13th and current president of Pakistan, in office since 9
                    September 2018. He was a member of the National Assembly of
                    Pakistan from June 2013 to May 2018 and again from August to
                    September 2018.
                  </p>

                  <p>
                    <a href="mailto:DrFarookhSabtani@gmail.com">
                      DrFarookhSabtani@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="card">
                <img src={b2} alt="Mike" style={{ height:"50%" }} />
                <div className="container">
                  <h2>Wasireen kokani</h2>
                  <p className="title">Service Provider</p>
                  <p style={{ fontSize: "16px" }}>
                    Mian Muhammad Shehbaz Sharif is a Pakistani politician
                    serving as the 23rd and current prime minister of Pakistan,
                    in office since 11 April 2022. He is the current president
                    of the Pakistan Muslim.
                  </p>

                  <p>
                    <a href="mailto:Wasireenkokani@gmail.com">
                      Wasireenkokani@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="card">
                <img src={b3} alt="John" style={{ width: "100%" }} />
                <div className="container">
                  <h2>Sultana Wasi</h2>
                  <p className="title">Check and Blance</p>
                  <p style={{ fontSize: "16px" }}>
                    Sultana Wasi is a Pakistani politician who is the current
                    Chief Minister of Khyber Pakhtunkhwa, in office since 17
                    August 2018. He has been a member of the Provincial Assembly
                    of Khyber Pakhtunkhwa{" "}
                  </p>
                  <p>
                    <a href="mailto:SultanaWasi@gmail.com">
                      SultanaWasi@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
