import React from 'react';
import ProfileImage from "../images/profile-image.jpg";

const Sidebar = ({ setActiveTab, activeTab, sidebarOpen }) => {
  const menuItems = [
    { name: 'Home', icon: 'lnr-home' },
    { name: 'About', icon: 'lnr-user' },
    { name: 'Resume', icon: 'lnr-license' },
    { name: 'Portfolio', icon: 'lnr-briefcase' },
    { name: 'Contact', icon: 'lnr-envelope' },
  ];

  return (
    <div className={`main-sidebar ${sidebarOpen ? 'open' : ''}`}>
      <div className='side-bar-header-wrapper'>
        <div className='image-container-wrapper'>
          <h2 className='ff-playfair text-uppercase f-size-18 text-white'>Prathamesh Bhosale</h2>
          <img src={ProfileImage} alt='Prathamesh Bhosale' className='w-100 profile-img'/>
        </div>
      </div>
      <div className='navbar-wrapper'>
        <ul className='navbar'>
          {menuItems.map((item, index) => (
            <li 
              key={index} 
              className={`nav-menu ${activeTab === item.name ? 'active' : ''}`}
            >
              <a href='/' onClick={(e) => { e.preventDefault(); setActiveTab(item.name); }}>
                <span className="nav-menu-icon">
                  <i className={`lnr ${item.icon}`}></i>
                </span>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className='nav-footer'>
        <ul className='social'>
          <li className='social-icon'><a href='/'><i className="fa-brands fa-square-facebook"></i></a></li>
          <li className='social-icon'><a href='/'><i className="fa-brands fa-linkedin"></i></a></li>
          <li className='social-icon'><a href='/'><i className="fa-brands fa-square-twitter"></i></a></li>
          <li className='social-icon'><a href='/'><i className="fa-brands fa-square-dribbble"></i></a></li>
          <li className='social-icon'><a href='/'><i className="fa-brands fa-square-behance"></i></a></li>
        </ul>
        <div className='copyright-wrapper'>
          <p>2024 © Prathamesh Bhosale. <span className='d-block'>All Rights Reserved.</span></p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
