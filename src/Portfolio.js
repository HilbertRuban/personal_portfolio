import React, { useEffect } from "react";
import netflixclone from "./netflix-clone.png";
import hulu from "./img/hulu.png";
import twitter from "./img/twitter1.jpg";
import apple from "./img/apple.JPG";
import creative from "./img/creative-design.JPG";
import li from "./img/linkedin.JPG";
import cc from "./img/classic-cars.JPG";
import road from "./img/road.JPG";
import ba from "./img/buisness-agency.JPG";
import architect from "./img/architect.JPG";
import Aos from "aos";
import "aos/dist/aos.css";

function Portfolio() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div id="portfolio" className="portfolio">
      <h1 data-aos="fade-down" className="portfolio_heading">
        Some of My Past Project
      </h1>
      <div className="post-wrapper">
        <div data-aos="fade-right" className="post">
          <a href="https://netflix-clone-176ff.web.app" target="_blank">
            <img src={netflixclone} alt="" className="thumbnail" />
            <div className="overlay"></div>
            <div className="desc">
              <h3>Netflix Clone</h3>
            </div>
          </a>
        </div>

        <div data-aos="fade-down" className="post">
          <a href="https://hulu-homepage-db725f.netlify.app" target="_blank">
            <img src={hulu} alt="" className="thumbnail" />
            <div className="overlay"></div>
            <div className="desc">
              <h3>Hulu Homepage</h3>
            </div>
          </a>
        </div>
        <div data-aos="fade-left" className="post">
          <a href="https://apple-esite-2376.netlify.app" target="_blank">
            <img src={apple} alt="" className="thumbnail" />
            <div className="overlay"></div>
            <div className="desc">
              <h3>Apple Ecommerce</h3>
            </div>
          </a>
        </div>
        <div data-aos="fade-left" className="post">
          <a href="https://linkedin-clone-a084c.web.app" target="_blank">
            <img src={li} alt="" className="thumbnail" />
            <div className="overlay"></div>
            <div className="desc">
              <h3>LinkedIn Clone</h3>
            </div>
          </a>
        </div>
        <div data-aos="fade-right" className="post">
          <a href="https://the-road-4456fa.netlify.app" target="_blank">
            <img src={road} alt="" className="thumbnail" />
            <div className="overlay"></div>
            <div className="desc">
              <h3>The Road</h3>
            </div>
          </a>
        </div>
        <div data-aos="fade-left" className="post">
          <a href="https://twitter-clone1-d94e0.web.app" target="_blank">
            <img src={twitter} alt="" className="thumbnail" />
            <div className="overlay"></div>
            <div className="desc">
              <h3>Twitter Clone</h3>
            </div>
          </a>
        </div>
        <div data-aos="fade-right" className="post">
          <a href="https://architect-design-0cec28.netlify.app" target="_blank">
            <img src={architect} alt="" className="thumbnail" />
            <div className="overlay"></div>
            <div className="desc">
              <h3>Architect Website</h3>
            </div>
          </a>
        </div>
        <div data-aos="fade-up" className="post">
          <a href="https://creative-design-83414d.netlify.app" target="_blank">
            <img src={creative} alt="" className="thumbnail" />
            <div className="overlay"></div>
            <div className="desc">
              <h3>Creative Design</h3>
            </div>
          </a>
        </div>
        <div data-aos="fade-right" className="post">
          <a href="https://classic-cars-1c95ef.netlify.app" target="_blank">
            <img src={cc} alt="" className="thumbnail" />
            <div className="overlay"></div>
            <div className="desc">
              <h3>Classic Cars</h3>
            </div>
          </a>
        </div>
        <div data-aos="fade-down" className="post">
          <a href="https://business-agency-f809e7.netlify.app" target="_blank">
            <img src={ba} alt="" className="thumbnail" />
            <div className="overlay"></div>
            <div className="desc">
              <h3>Business Agency</h3>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
