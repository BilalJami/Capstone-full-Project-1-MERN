import React from "react";
import "./Mediagallary.css";
import pic1 from "../photos/boss1.jpg";
import pic2 from "../photos/boss2.jpg";
import pic3 from "../photos/boss3.jpg";
import pic4 from "../photos/china.jpg";
import pic5 from "../photos/london.jpg";
import pic6 from "../photos/pakistan.jpg";
import pic7 from "../photos/pexels-asad-photo-maldives-1268855.jpg";
import pic8 from "../photos/pexels-haley-black-2087391.jpg";
import pic9 from "../photos/pexels-nubia-navarro-(nubikini)-386000.jpg";
import pic10 from "../photos/pexels-pixabay-276334.jpg";
import pic11 from "../photos/pexels-simon-berger-931881.jpg";
import pic12 from "../photos/pexels-the-lazy-artist-gallery-1302991.jpg";
import pic13 from "../photos/phottxt.jpg";

function Mediagallary() {
  return (
    <>
      <div className="sect1">
        <h1 className="container">Media Gallary</h1>

        <p className="container">
          Some Clicks on the events of our community and company.
        </p>

        <div class="grid-container">
          <div>
            <img src={pic1} alt="media gallary" />
          </div>
          <div>
            <img src={pic2} alt="media gallary" />
          </div>
          <div>
            <img src={pic3} alt="media gallary" />
          </div>
          <div>
            <img src={pic4} alt="media gallary" />
          </div>
          <div>
            <img src={pic5} alt="media gallary" />
          </div>
          <div>
            <img src={pic6} alt="media gallary" />
          </div>
          <div>
            <img src={pic7} alt="media gallary" />
          </div>
          <div>
            <img src={pic8} alt="media gallary" />
          </div>
          <div>
            <img src={pic9} alt="media gallary" />
          </div>
          <div>
            <img src={pic10} alt="media gallary" />
          </div>
          <div>
            <img src={pic11} alt="media gallary" />
          </div>
          <div>
            <img src={pic12} alt="media gallary" />
          </div>
          <div>
            <img src={pic13} alt="media gallary" />
          </div>
        </div>

        <p>Upcoming events Clicks are shown here. so updated.</p>
      </div>
    </>
  );
}

export default Mediagallary;
