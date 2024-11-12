import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AlemikDigital from '../images/clients/alemik-digital.png';
import Ezephyr from '../images/clients/ezephyr.png';
import TrinetraVenture from '../images/clients/trinetra-venture.png';
import BrilliantCare from '../images/clients/brilliant-care.png';
import TurakhiaOptics from '../images/clients/turakhia-optics.png';
import IndesignByNatasha from '../images/clients/indesignbynatasha.png';
import Krimakay from '../images/clients/krimakay.png';
import NamtiSalon from '../images/clients/namti-salon.png';
import MasterTechAZ from '../images/clients/mastertechaz.png';

const ClientsLogoSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 600, settings: { slidesToShow: 2 } }
    ]
  };

  return (
    <Slider className="clients-logo-slider" {...settings}>
      <div className="client-logo"><a href='https://ezephyr.in/test/alemik-digital/' target='_blank' rel="noopener noreferrer"><img src={AlemikDigital} alt="alemik digital"/></a></div>
      <div className="client-logo"><a href='https://ezephyr.in/test/new-ezephyr/' target='_blank' rel="noopener noreferrer"><img src={Ezephyr} alt="Ezephyr" /></a></div>
      <div className="client-logo"><a href='https://trinetraventure.com/' target='_blank' rel="noopener noreferrer"><img src={TrinetraVenture} alt="Trinetra Venture" /></a></div>
      <div className="client-logo"><a href='https://brilliant.care/' target='_blank' rel="noopener noreferrer"><img src={BrilliantCare} alt="Brilliant Care" /></a></div>
      <div className="client-logo"><a href='https://www.turakhiaoptics.com/' target='_blank' rel="noopener noreferrer"><img src={TurakhiaOptics} alt="Turakhia Optics" /></a></div>
      <div className="client-logo"><a href='https://indesignbynatasha.com/' target='_blank' rel="noopener noreferrer"><img src={IndesignByNatasha} alt="Indesign By Natasha" /></a></div>
      <div className="client-logo"><a href='https://krimakay.com/' target='_blank' rel="noopener noreferrer"><img src={Krimakay} alt="Krimakay" /></a></div>
      <div className="client-logo"><a href='https://namtisalon.com/' target='_blank' rel="noopener noreferrer"><img src={NamtiSalon} alt="Namti Salon" /></a></div>
      <div className="client-logo"><a href='https://www.mastertechaz.com/' target='_blank' rel="noopener noreferrer"><img src={MasterTechAZ} alt="MasterTechAZ" /></a></div>
    </Slider>
  );
};

export default ClientsLogoSlider;
