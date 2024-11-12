import React from "react";
import CodingBars from "./CodingBars";
import DesigningBars from "./DesigningBars";

const SectionThree = ({ activeTab, animationClass }) => {
  return (
    <section
      className={`section-resume section-padding ${animationClass} ${
        activeTab === "Resume" ? "page-active" : ""
      }`}
    >
      <div className="section-container">
        <div className="row mb-70">
          <div className="col-12">
            <div className="section-heading-wrapper d-flex justify-content-between">
              <h2 className="ff-playfair fw-bold f-size-36 text-blue">
                My Resume
              </h2>
              <span className="heading-icon text-blue f-size-38">
                <i className="lnr lnr-license"></i>
              </span>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section-subheading-wrapper mb-50">
              <h3 className="ff-playfair f-size-22 text-uppercase text-center">
                Experience
              </h3>
            </div>
            <div className="resume-content">
              <ul className="experience">
                <li>
                  <span className="line-left"></span>
                  <div className="content">
                    <h4>Web Developer</h4>
                    <h5>Ezephyr Advertising Pvt. Ltd., Wadala (East), Mumbai - 400037</h5>
                    <p className="info">
                    I’m a web developer at Ezephyr Advertising Pvt. Ltd., specializing in HTML, CSS, JavaScript, React, and Node.js, with experience in MongoDB, MySQL, Shopify, and WordPress. I’m passionate about creating user-friendly applications and optimizing them for SEO. Additionally, I design with Adobe Illustrator and Photoshop to bring my projects to life. Let’s collaborate to build something great!
                    </p>
                  </div>
                  <span className="year">
                    <span className="to">Apr 2023</span>
                    <span className="from">Nov 2024</span>
                  </span>
                </li>

                <li>
                  <span className="line-left"></span>
                  <div className="content">
                    <h4>Web Developer (Intern)</h4>
                    <h5>Velocity Cunsultancy Pvt. Ltd., Malad (West), Mumbai - 400060</h5>
                    <p className="info">
                    As a Web Developer Intern, I focused on enhancing my skills in web development and design. My key responsibilities included creating responsive web applications using HTML, CSS, JavaScript, Bootstrap, and jQuery, along with managing content and functionality on WordPress sites. I also gained experience in web design through Adobe Photoshop, contributing to visually appealing and user-friendly interfaces.
                    </p>
                  </div>
                  <span className="year">
                    <span className="to">Dec 2022</span>
                    <span className="from">Mar 2023</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section-subheading-wrapper mb-50">
              <h3 className="ff-playfair f-size-22 text-uppercase text-center">
                Education
              </h3>
            </div>
            <div className="education-content">
              <ul className="education">
                <li>
                  <span className="line-left"></span>
                  <div className="content">
                    <h4>Web Development</h4>
                    <h5>Keerti Institute, Vile Parle, Mumbai - 400057</h5>
                  </div>
                  <span className="year">
                    <span className="to">2014</span>
                    <span className="from">2013</span>
                  </span>
                </li>

                <li>
                  <span className="line-left"></span>
                  <div className="content">
                    <h4>HSC (Science)</h4>
                    <h5>BPK Junior College, Jakadevi, Ratnagiri, Maharashtra - 415612</h5>
                  </div>
                  <span className="year">
                    <span className="to">2018</span>
                    <span className="from">2017</span>
                  </span>
                </li>

                <li>
                  <span className="line-left"></span>
                  <div className="content">
                    <h4>SSC</h4>
                    <h5>TMM School, Jakadevi, Ratnagiri, Maharashtra - 415612</h5>
                  </div>
                  <span className="year">
                    <span className="to">2016</span>
                    <span className="from">2015</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row pb-70">
          <div className="col-lg-6">
          <div className="section-subheading-wrapper mb-50">
              <h3 className="ff-playfair f-size-22 text-uppercase text-center">
                Coding Sklills
              </h3>
            </div>
            <div className="progress-bars-wrapper">
              <CodingBars/>
            </div>
          </div>
          <div className="col-lg-6">
          <div className="section-subheading-wrapper mb-50">
              <h3 className="ff-playfair f-size-22 text-uppercase text-center">
                Designing Sklills
              </h3>
            </div>
            <div className="progress-bars-wrapper">
              <DesigningBars/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
