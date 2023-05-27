import React, { useEffect } from "react";
import Typed from "react-typed";
import Particles from "react-particles-js";
import RellaxWrapper from "react-rellax-wrapper";
import { Link } from "react-scroll";
import Aos from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div id="home" className="header-wraper">
        <Particles
          params={{
            particles: {
              number: {
                value: 25,
                density: {
                  enable: true,
                  value_area: 1000,
                },
              },
              shape: {
                type: "polygon",
                stroke: {
                  width: 4,
                  color: "#FF0000",
                },
              },
            },
          }}
        />
        <div className="main-info">
          <h1 data-aos="zoom-in">Hi, I'm Hilbert Ruban</h1>

          <p>And I'm a</p>
          <Typed
            className="typed-text"
            strings={[
              "Web Developer",
              "Front-End Developer",
              "Software Developer",
            ]}
            typeSpeed={60}
            backSpeed={40}
            loop
          />

          <Link
            smooth={true}
            to="contact"
            offset={-110}
            href="#"
            className="btn btn-main-offer"
          >
            Contact{" "}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
