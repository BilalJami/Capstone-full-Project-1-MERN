import React from "react";
import "./Home.css";
import pics1 from "../photos/pexels-asad-photo-maldives-1268855.jpg";
import pics2 from "../photos/pexels-haley-black-2087391.jpg";
import pics3 from "../photos/pexels-nubia-navarro-(nubikini)-386000.jpg";
import pics4 from "../photos/pexels-pixabay-276334.jpg";
import pics5 from "../photos/pexels-simon-berger-931881.jpg";
import pics6 from "../photos/pexels-the-lazy-artist-gallery-1302991.jpg";
import pics7 from "../photos/phottxt.jpg";

import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="sections ">
        <div className=" show txt">
          <h2>Some About Tourism</h2>
          <p>
            Tourism is travel for pleasure or business; also the theory and
            practice of touring, the business of attracting, accommodating, and
            entertaining tourists, and the business of operating tours.
          </p>
          <p>
            Tourism is travel for pleasure or business; also the theory and
            practice of touring, the business of attracting, accommodating, and
            entertaining tourists, and the business of operating tours.[2] The
            World Tourism Organization defines tourism more generally, in terms
            which go "beyond the common perception of tourism as being limited
            to holiday activity only", as people "traveling to and staying in
            places outside their usual environment for not more than one
            consecutive year for leisure and not less than 24 hours, business
            and other purposes".[3] Tourism can be domestic (within the
            traveller's own country) or international, and international tourism
            has both incoming and outgoing implications on a country's balance
            of payments. Tourism numbers declined as a result of a strong
            economic slowdown (the late-2000s recession) between the second half
            of 2008 and the end of 2009, and in consequence of the outbreak of
            the 2009 H1N1 influenza virus,[4][5] but slowly recovered until the
            COVID-19 pandemic put an abrupt end to the growth.
          </p>
        </div>
        <div className="show photo" >
          <img src={pics2} alt="pakistan"  />
        </div>
      </section>
      <hr />
      <br />

      {/* ####################### section 2 ####################### */}

      <section className="photos-show">
        <h1 className="container ">Some Tours Photos</h1>
        <div className="container text-center">
          <div className="row">
            <div className="col ">
              <img
                src={pics1}
                alt="pics"
                // style={{ height: "480px", width: "540px" }}
              />
            </div>
            <div className="col ">
              <img
                src={pics2}
                alt="pics"
                // style={{ height: "480px", width: "540px" }}
              />
            </div>
            <div className="col ">
              <img
                src={pics2}
                alt="pics"
                // style={{ height: "480px", width: "540px" }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <img
                src={pics3}
                alt="pics"
                // style={{ height: "480px", width: "540px" }}
              />
            </div>
            <div className="col ">
              <img
                src={pics4}
                alt="pics"
                // style={{ height: "480px", width: "540px" }}
              />
            </div>
            <div className="col ">
              <img
                src={pics5}
                alt="pics"
                // style={{ height: "480px", width: "540px" }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col ">
              <img
                src={pics3}
                alt="pics"
                // style={{ height: "480px", width: "540px" }}
              />
            </div>
            <div className="col ">
              <img
                src={pics1}
                alt="pics"
                // style={{ height: "480px", width: "540px" }}
              />
            </div>
            <div className="col ">
              <img
                src={pics1}
                alt="pics"
                // style={{ height: "480px", width: "540px" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
