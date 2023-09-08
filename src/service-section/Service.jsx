import React from "react";
import "./ServiceStyles.css";
const Service = () => {
  return (
    <div id='service'>
      <div className='service-left-grid'>
        <img src='../../src/assets/imgLaptop.png' alt='service' />
      </div>
      <div className='service-right-grid'>
        <div className='service-headers'>
          <h1>our service</h1>
          <h3>Onze Toegewijde Dienstverlening</h3>
        </div>
        <div className='service-right-grid-text-holder'>
          <p>
            Bij Nexa bieden we een breed scala aan diensten om aan al uw
            digitale behoeften te voldoen. Of u nu op zoek bent naar krachtige
            <span className='boldy-white'>
              .NET-oplossingen, boeiende ReactJs-websites, responsief ontwerp
            </span>
            of een klantgerichte benadering , ons toegewijde team van
            professionals staat klaar om uw visie tot leven te brengen. Uw
            succes is onze prioriteit, en we streven ernaar om de best mogelijke
            resultaten te leveren voor uw project. Neem vandaag nog contact met
            ons op om te ontdekken hoe we uw online doelen kunnen
            verwezenlijken.
          </p>
        </div>
        <div className='service-right-grid-button-holder'>
          <button>read more</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
