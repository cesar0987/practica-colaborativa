import React from 'react';

const Hero = () => {
  const heroStyle = {
    backgroundImage:
      'url("https://assets.lummi.ai/assets/QmXLvZXwxQbrMuk3tffgbQpDXy1bfC3wRvtDaQ6mUAUp1t?auto=format&w=1500")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center',
    padding: '0 20px'
  };

  const overlayStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 2
  };

  const titleStyle = {
    fontSize: '48px',
    margin: '0 0 20px 0',
    fontFamily: 'Arial, sans-serif'
  };

  const subtitleStyle = {
    fontSize: '24px',
    margin: '0 0 40px 0',
    fontFamily: 'Arial, sans-serif'
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '18px',
    color: '#4CAF50',
    backgroundColor: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontFamily: 'Arial, sans-serif'
  };

  return (
    <div style={heroStyle}>
      <div style={overlayStyle}>
        <div style={contentStyle}>
          <h1 style={titleStyle}>Welcome to My Website</h1>
          <p style={subtitleStyle}>
            Discover amazing content and join our community
          </p>
          <button style={buttonStyle}>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
