import React, { useState, memo, Suspense } from "react";
import PortImgOne from "../images/portfolio/alemik-digital.jpg";
import PortImgTwo from "../images/portfolio/child-vision-trust.jpg";
import PortImgThree from "../images/portfolio/new-ezephyr.jpg";
import PortImgFour from "../images/portfolio/krimakay.jpg";
import PortImgFive from "../images/portfolio/mastertechaz.jpg";
import PortImgSix from "../images/portfolio/namtisalon.jpg";
import PortImgSeven from "../images/portfolio/trinetraventure.jpg";
import PortImgEight from "../images/portfolio/brilliant-care.jpg";
import PortImgNine from "../images/portfolio/turakhiaoptics.jpg";
import PortImgTen from "../images/portfolio/indesignbynatasha.jpg";
import Tilt from "react-parallax-tilt";

const SectionFour = memo(({ activeTab, animationClass }) => {
  const [filter, setFilter] = useState("*");

  const portfolioItems = [
    { id: 1, category: "react", img: PortImgOne, link: "https://ezephyr.in/test/alemik-digital", title: "Alemik Digital", subtitle: "React Js" },
    { id: 2, category: "react", img: PortImgTwo, link: "https://ezephyr.in/test/child-vision-trust", title: "Child Vision Trust", subtitle: "React Js" },
    { id: 3, hrdata: "horizontal", category: "react", img: PortImgThree, link: "https://ezephyr.in/test/new-ezephyr", title: "New Ezephyr", subtitle: "React Js" },
    { id: 4, category: "shopify", img: PortImgFour, link: "https://www.krimakay.com", title: "Krimakay", subtitle: "Shopify" },
    { id: 5, category: "wordpress", img: PortImgFive, link: "https://www.mastertechaz.com", title: "Mastertech AZ", subtitle: "Wordpress" },
    { id: 6, category: "wordpress", img: PortImgSix, link: "https://www.namtisalon.com", title: "Namti Salon", subtitle: "Wordpress" },
    { id: 7, category: "html", img: PortImgSeven, link: "https://www.trinetraventure.com", title: "Trinetra Venture", subtitle: "HTML" },
    { id: 8, category: "html", img: PortImgEight, link: "https://www.brilliant.care", title: "Brilliant Care", subtitle: "HTML" },
    { id: 9, category: "html", img: PortImgNine, link: "https://www.turakhiaoptics.com", title: "Turakhia Optics", subtitle: "HTML" },
    { id: 10, category: "html", img: PortImgTen, link: "https://www.indesignbynatasha.com", title: "Indesign By Natasha", subtitle: "HTML" },
  ];

  const filteredItems = filter === "*" ? portfolioItems : portfolioItems.filter((item) => item.category === filter);

  const handleFilterClick = (category) => {
    setFilter(category);
  };

  return (
    <section
      className={`section-portfolio section-padding ${animationClass} ${
        activeTab === "Portfolio" ? "page-active" : ""
      }`}
    >
      <div className="section-container">
        <div className="row">
          <div className="col-12">
            <div className="section-heading-wrapper d-flex justify-content-between">
              <h2 className="ff-playfair fw-bold f-size-36 text-blue">
                Portfolio.
              </h2>
              <span className="heading-icon text-blue f-size-38">
                <i className="lnr lnr-briefcase"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="portfolio-filter">
              <ul>
                <li className={filter === "*" ? "active" : ""} onClick={() => handleFilterClick("*")}>All</li>
                <li className={filter === "react" ? "active" : ""} onClick={() => handleFilterClick("react")}>React JS</li>
                <li className={filter === "shopify" ? "active" : ""} onClick={() => handleFilterClick("shopify")}>Shopify</li>
                <li className={filter === "wordpress" ? "active" : ""} onClick={() => handleFilterClick("wordpress")}>Wordpress</li>
                <li className={filter === "html" ? "active" : ""} onClick={() => handleFilterClick("html")}>HTML/PHP</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row portfolio-items pb-50 justify-content-center">
          {filteredItems.map((item) => (
            <div key={item.id} className={`item col-lg-4 col-sm-6 ${item.category}`} style={{ position: "relative" }}>
              <a className="image-link" href={item.link} target="_blank" rel="noopener noreferrer">
                <Suspense fallback={<div>Loading...</div>}>
                  <Tilt
                    className="Tilt custom-tilt"
                    tiltMaxAngleX={3}
                    tiltMaxAngleY={3}
                    glareEnable={false}
                    style={{ willChange: "transform" }}
                  >
                    <figure className={item.hrdata}>
                      <img src={item.img} alt={item.title} className="w-100" loading="lazy" />
                      <figcaption>
                        <h4>{item.title}</h4>
                        <p>{item.subtitle}</p>
                      </figcaption>
                    </figure>
                  </Tilt>
                </Suspense>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default SectionFour;
