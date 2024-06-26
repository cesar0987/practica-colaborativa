import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navStyle = {
    backgroundColor: '#ffffff',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };

  const logoStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#333',
    textDecoration: 'none'
  };

  const menuStyle = {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0
  };

  const menuItemStyle = {
    margin: '0 1rem'
  };

  const linkStyle = {
    color: '#333',
    textDecoration: 'none',
    fontSize: '1rem',
    transition: 'color 0.3s ease'
  };

  const hamburgerStyle = {
    display: 'none',
    flexDirection: 'column',
    cursor: 'pointer',
    '@media (max-width: 768px)': {
      display: 'flex'
    }
  };

  const lineStyle = {
    width: '25px',
    height: '3px',
    backgroundColor: '#333',
    margin: '2px 0',
    transition: 'all 0.3s ease'
  };

  const responsiveMenuStyle = {
    display: 'flex',
    '@media (max-width: 768px)': {
      display: isOpen ? 'flex' : 'none',
      flexDirection: 'column',
      position: 'absolute',
      top: '60px',
      left: 0,
      right: 0,
      backgroundColor: '#ffffff',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }
  };

  return (
    <nav style={navStyle}>
      <a href="/" style={logoStyle}>
        Logo
      </a>
      <div style={hamburgerStyle} onClick={() => setIsOpen(!isOpen)}>
        <span style={lineStyle}></span>
        <span style={lineStyle}></span>
        <span style={lineStyle}></span>
      </div>
      <ul style={{ ...menuStyle, ...responsiveMenuStyle }}>
        <li style={menuItemStyle}>
          <a href="/" style={linkStyle}>
            Home
          </a>
        </li>
        <li style={menuItemStyle}>
          <a href="/about" style={linkStyle}>
            About
          </a>
        </li>
        <li style={menuItemStyle}>
          <a href="/services" style={linkStyle}>
            Services
          </a>
        </li>
        <li style={menuItemStyle}>
          <a href="/contact" style={linkStyle}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
