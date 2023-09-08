import React from "react";
import "./FooterStyles.css";
const Footer = () => {
  return (
    <div id='footer'>
      <div className='grid-container'>
        <div className='grid-item'>
          <p>
            <b>Hey, wil je praten?</b>
          </p>
          <p>
            Nexa Web Oplossingen
            <br />
            Hoofdstraat 123
            <br />
            90210, Beverly Hills
            <br />
            <br />
            Bel ons: +1 123-456-7890
            <br />
            of stuur een mooie e-mail: info@nexawebsolutions.com
            <br />
            <br />
            Openingstijden: 9.00u tot 17.00u, Ma - Vr
          </p>
        </div>
        <div className='grid-item'>
          <p>
            <b>We're hirin'</b>
            <br />
            and you just look like you'd fit in
          </p>
          <p>
            Als je gepassioneerd bent over webontwikkeling, toegewijd bent aan
            het leveren van hoogwaardige projecten, en graag wilt bijdragen aan
            het succes van ons bedrijf, dan nodigen we je uit om contact met ons
            op te nemen. Samen kunnen we groeien, innoveren en een verschil
            maken in de wereld van digitale oplossingen.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
