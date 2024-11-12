import React from 'react';
import ClientsLogoSlider from './ClientsLogoSlider';
import ChildVisionTrust from '../images/clients/child-vision-trust.png';

const SectionTwo = ({ activeTab, animationClass }) => {
  return (
    <section className={`section-about section-padding ${animationClass} ${activeTab === 'About' ? 'page-active' : ''}`}>
        <div className='section-container'>
          <div className='row mb-70'>
             <div className='col-12'>
                <div className='section-heading-wrapper d-flex justify-content-between'>
                       <h2 className='ff-playfair fw-bold f-size-36 text-blue'>About Me.</h2>
                       <span className='heading-icon text-blue f-size-38'>
                       <i className="lnr lnr-user"></i>
                       </span>
                </div>
             </div>
             <div className='col-lg-8'>
               <h3 className='mb-20 ff-playfair f-size-22'>UI/UX Designer & Developer</h3>
               <p>As a UI/UX Designer and Developer, I have developed responsive, user-friendly websites using HTML, CSS, JavaScript, and React.js. I develop scalable applications tailored to business needs using Node.js, Express.js, MongoDB, and MySQL. Platforms such as Shopify and WordPress help me design and customize eCommerce and CMS solutions. Finally, I integrate SEO strategies and SMTP validation to enhance performance and security.</p>
               <p>For design, I have used Adobe Illustrator and Photoshop to develop visuals based on brand identity and improve the user experience. I integrate technology and a strong sense of design to deliver visually rich websites that are highly functional for navigation and interaction.</p>
             </div>
             <div className='col-lg-4'>
             <h3 className='mb-20 ff-playfair f-size-22'>Personal Information</h3>
             <div className='personal-info-wrapp'>
              <ul className='personal-info'>
                 <li><span className='title'>Name</span><span className='value'>Prathamesh Bhosale</span></li>
                 <li><span className='title'>Age</span><span className='value'>25 Years</span></li>
                 <li><span className='title'>Residence</span><span className='value'>India, Maharashtra</span></li>
                 <li><span className='title'>City</span><span className='value'>Mumbai - 400060</span></li>
                 <li><span className='title'>Email</span><span className='value'><a href='mailto:prathameshvelocity5@gmail.com'>prathameshvelocity5@gmail.com</a></span></li>
                 <li><span className='title'>Phone</span><span className='value'><a href='tel:9309974864'>+91 9309974864</a></span></li>
                 <li><span className='title'>Freelance</span><span className='value'>Available</span></li>
              </ul>
             </div>
             <div className='section-btn-wrapper mt-30'>
               <a className='main-btn' href='/prathamesh-bhosale-resume.pdf' download>
               Download Resume
               </a>
             </div>
             </div>
          </div>
          <div className='row mb-30'>
            <div className='col-md-12'>
              <div className='section-subheading-wrapper mb-50'>
                 <h3 className='ff-playfair f-size-22 text-uppercase text-center'>Services</h3>
              </div>
            </div>
            <div className='col-lg-3 col-sm-6'>
              <div className='service-item'>
                <div className='service-icon-wrapper'>
                   <span className='service-icon'>
                     <i className="lnr lnr-laptop"></i>
                   </span>
                </div>
                <h4 className='ff-playfair f-size-18 fw-600'>Web Development</h4>
                <p className='service-desc'>Experienced in HTML, CSS, JavaScript, React, Node.js, MongoDB, MySQL, Shopify, WordPress, SEO, and form validation.</p>
              </div>
            </div>
            <div className='col-lg-3 col-sm-6'>
              <div className='service-item'>
                <div className='service-icon-wrapper'>
                   <span className='service-icon'>
                     <i className="lnr lnr-eye"></i>
                   </span>
                </div>
                <h4 className='ff-playfair f-size-18 fw-600'>Web Design</h4>
                <p className='service-desc'>Crafting dynamic and innovative user-focused designs with HTML, CSS, Bootstrap, and UX/UI principles for engaging websites.</p>
              </div>
            </div>
            <div className='col-lg-3 col-sm-6'>
              <div className='service-item'>
                <div className='service-icon-wrapper'>
                   <span className='service-icon'>
                     <i className="lnr lnr-laptop-phone"></i>
                   </span>
                </div>
                <h4 className='ff-playfair f-size-18 fw-600'>Responsive Design</h4>
                <p className='service-desc'>Delivering adaptive designs using HTML, CSS, and Bootstrap to ensure seamless experiences across all devices.</p>
              </div>
            </div>
            <div className='col-lg-3 col-sm-6'>
              <div className='service-item'>
                <div className='service-icon-wrapper'>
                   <span className='service-icon'>
                     <i className="lnr lnr-magnifier"></i>
                   </span>
                </div>
                <h4 className='ff-playfair f-size-18 fw-600'>SEO</h4>
                <p className='service-desc'>Implementing effective SEO strategies to enhance online visibility, drive traffic, and improve search engine rankings.</p>
              </div>
            </div>
          </div>
          <div className='row mb-30'>
          <div className='col-md-12'>
              <div className='section-subheading-wrapper mb-50'>
                 <h3 className='ff-playfair f-size-22 text-uppercase text-center'>Company Clients</h3>
              </div>
            </div>
            <div className='col-md-12'>
              <div className='clients-logo-slider-wrapper'>
                <ClientsLogoSlider/>
              </div>
            </div>
          </div>
          <div className='row pb-30'>
          <div className='col-md-12'>
              <div className='section-subheading-wrapper mb-50'>
                 <h3 className='ff-playfair f-size-22 text-uppercase text-center'>Freelance Client</h3>
              </div>
            </div>
            <div className='col-md-12'>
              <div className='clients-logo-slider-wrapper'>
              <div className='clients-logo-slider'>
              <div className="client-logo text-center"><a href='https://ezephyr.in/test/child-vision-trust/' target='_blank' rel="noopener noreferrer"><img src={ChildVisionTrust} alt="Child Vision Trust" /></a></div>
              </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default SectionTwo