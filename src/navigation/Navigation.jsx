import React from "react";
import "./NavigationStyles.css";
import { Link, animateScroll as scroll } from "react-scroll";

const Navigation = () => {
  return (
    <nav className='navigation-container'>
      <img src='/ahmet.svg' alt='mijn logo' id='website-logo' />
      <h1>Nexa</h1>
      <ul className='navigation-wrapper'>
        <li>
          <Link to='welcome' smooth={true} duration={500}>
            home
          </Link>
        </li>

        <li>
          <Link to='producten' smooth={true} duration={500}>
            what we do
          </Link>
        </li>
        <li>
          <Link to='service' smooth={true} duration={500}>
            service
          </Link>
        </li>
        <li>
          <Link to='reference' smooth={true} duration={500}>
            reference
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
