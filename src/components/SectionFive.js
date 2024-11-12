import React from 'react';

const SectionFive = ({ activeTab, animationClass }) => {
  return (
    <section className={`section-contact section-padding ${animationClass} ${activeTab === 'Contact' ? 'page-active' : ''}`}>
      <div className='section-container'>
        <div className='row'>
          <div className='col-12'>
            <div className='section-heading-wrapper d-flex justify-content-between'>
              <h2 className='ff-playfair fw-bold f-size-36 text-blue'>Contact Me.</h2>
              <span className='heading-icon text-blue f-size-38'>
                <i className="lnr lnr-envelope"></i>
              </span>
            </div>
          </div>
        </div>
        <div className='row mb-70'>
          <div className='col-lg-8 offset-lg-2'>
            <div className="section-subheading-wrapper mb-50">
              <h3 className="ff-playfair f-size-22 text-uppercase text-center">
                Let’s Talk
              </h3>
            </div>
            <div className='contact-form' id='contact-form'>
              <form id="contact-form" method="post" action="mail.php">
                <div className="row">
                  <div className="col-md-6 mb-50">
                    <span className="input">
                      <input className="input__field cf-validate" type="text" id="cf-name" name="name"/>
                      <label className="input__label" htmlFor="cf-name">Name</label>
                    </span>
                  </div>
                  <div className="col-md-6 mb-50">
                    <span className="input">
                      <input className="input__field cf-validate" type="text" id="cf-email" name="email"/>
                      <label className="input__label" htmlFor="cf-email">Email</label>
                    </span>
                  </div>
                  <div className="col-md-12 mb-30">
                    <span className="input">
                      <textarea className="input__field cf-validate" id="cf-message" name="message" rows="5"></textarea>
                      <label className="input__label" htmlFor="cf-message">How can we help you?</label>
                    </span>
                  </div>
                  <div className="col-md-12 text-center section-btn-wrapper">
                    <button id="cf-submit" className="main-btn">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row contact-info mb-70">
          <div className="col-md-4 info-item">
            <span className="icon"><i className="fas fa-paper-plane"></i></span>
            <h5><a href="mailto:example@example.com">prathameshvelocity5@gmail.com</a></h5>
          </div>
          <div className="col-md-4 info-item">
            <span className="icon"><i className="fas fa-map-marker-alt"></i></span>
            <h5><a href='https://maps.app.goo.gl/BcpLdudDjVisbCxA8'>Jogeshwari (East), Mumbai - 400060</a></h5>
          </div>
          <div className="col-md-4 info-item">
            <span className="icon"><i className="fas fa-phone"></i></span>
            <h5><a href='tel:9309974864'>(+91) 9309974864</a></h5>
          </div>
        </div>
      </div>
      <div className='map-wrapper'>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37419.342897235125!2d72.84034591960638!3d19.133099803303406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63b76f3de9b%3A0x1e1d1cd27f00b1f8!2sJogeshwari%20East%2C%20Mumbai%2C%20Maharashtra!5e1!3m2!1sen!2sin!4v1731146483540!5m2!1sen!2sin"
    width="100%"
    height="200"
    style={{ border: '0' }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Jogeshwari East, Mumbai Location Map"
  ></iframe>
</div>
    </section>
  );
};

export default SectionFive;
