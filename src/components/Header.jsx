import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../css/Header.css';
import SignIn from "../pages/SignIn";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showSignIn, setShowSignIn] = useState(false);

  const toggleSignIn = () => {
    setShowSignIn(!showSignIn);
  };

  
 
  const handleForgotPasswordClick = () => {
    setShowSignIn(false); // close the login panel
    navigate('/forgot-password');
  };

  const handleRegisterClick = () => {
    setShowSignIn(false); // close the login panel
    navigate('/register');
  };


  return (
    <div className="header">
      <header className="header__content">
        <div>
          <img
            src="https://cdn5.vectorstock.com/i/1000x1000/29/39/creative-h-initial-letter-h-logo-design-vector-28822939.jpg"
            alt="logo"
            className="header__logo-image"
          />
        </div>
        <div>
          <ul className="header__links">
            <li
              className={`header__list-item sign-in-button ${
                location.pathname === '/' ? 'active' : ''
              }`}
              onClick={() => navigate('/')}>
              <img
                src="https://img.icons8.com/pulsar-line/512/home-page.png"
                style={{
                  display: 'inline-block',
                  verticalAlign: 'middle',
                  marginRight: '10px',
                }}
              />
              <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                Home
              </span>
            </li>
            <li
              className={`header__list-item sign-in-button ${
                location.pathname === '/offers' ? 'active' : ''
              }`}
              onClick={() => navigate('/offers')}>
              Offers
            </li>
            <li
              className={`header__list-item sign-in-button ${
                location.pathname === '/about-us' ? 'active' : ''
              }`}
              onClick={() => navigate('/about-us')}>
              About us
            </li>
            <li
              className={`header__list-item sign-in-button ${
                location.pathname === '/sign-in' ? 'active' : ''
              }`}
              onClick={toggleSignIn}>
              Sign in
            </li>
          </ul>
        </div>
      </header>
      {showSignIn && (
        <div className="sign-in">
          <div className="sign-in2" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={toggleSignIn}> X </button>
            <SignIn onForgotPasswordClick={handleForgotPasswordClick} onRegisterClick={handleRegisterClick} />
           
          </div>
        </div>
      )}
    </div>
  );
}
