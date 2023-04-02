import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import '../css/Header.css';
import SignIn from '../pages/SignIn';

export default function Header() {
  const [pageState, setPageState] = useState('Sign in');
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState('Profile');
        setShowSignIn(false); // close the login panel if the user logs in successfully
      } else {
        setPageState('Sign in');
      }
    });
  }, [auth]);

  function pathMatchRoute(route) {
    return route === location.pathname;
  }

  const [showSignIn, setShowSignIn] = useState(false);

  const toggleSignIn = () => {
    if (pageState === 'Sign in') {
      setShowSignIn(!showSignIn);
    } else {
      setShowSignIn(false);
      navigate('/profile');
    }
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
              onClick={() => navigate('/')}
            >
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
              onClick={() => navigate('/offers')}
            >
              Offers
            </li>
            <li
              className={`header__list-item sign-in-button ${
                location.pathname === '/about-us' ? 'active' : ''
              }`}
              onClick={() => navigate('/about-us')}
            >
              About us
            </li>
            <li
              className={`header__list-item sign-in-button ${
                location.pathname === '/sign-in' ? 'active' : ''
              } ${
                (pathMatchRoute('/sign-in') || pathMatchRoute('/profile')) &&
                'text-black border-b-red-500'
              }`}
              onClick={toggleSignIn}
            >
              {pageState}
            </li>
          </ul>
        </div>
      </header>
      {showSignIn && (
        <div className="sign-in">
          <div className="sign-in2" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={toggleSignIn}>
              X
            </button>
            <SignIn
              onForgotPasswordClick={handleForgotPasswordClick}
              onRegisterClick={handleRegisterClick}
            />
          </div>
        </div>
      )}
    </div>
  );
      }