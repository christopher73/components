import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ThemeContext from '../DarkMode/ThemeContext';

export default function Footer() {
  const theme = useContext(ThemeContext);
  const stylo = {
    fontFamily: 'Noto Sans JP',
    ...theme,
  };
  let iconStyle = {
    color: '#027373',
    fontSize: '2em',
    margin: '7px',
  };
  return (
    <footer style={stylo} className="footer ">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center p-3 m-auto">
            <a href="https://www.linkedin.com/in/cffr90/">
              <FontAwesomeIcon style={iconStyle} icon={faLinkedin} />
            </a>
            <a href="https://www.facebook.com/cffr90">
              <FontAwesomeIcon style={iconStyle} icon={faFacebook} />
            </a>
            <a href="https://github.com/christopher73">
              <FontAwesomeIcon style={iconStyle} icon={faGithub} />
            </a>
            <a href="mailto: christopher.fajardo73@gmail.com">
              <FontAwesomeIcon style={iconStyle} icon={faEnvelope} />
            </a>
            <p className="h5 text-secondary" to="/">
              Christopher © 2019
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
