import React from "react";
import "animate.css";
import "./ReferenceStyles.css";
import { motion } from "framer-motion";
const Reference = () => {
  return (
    <motion.div
      id='reference'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4 }}
    >
      <div className='reference-left-grid'>
        <img src='../../src/assets/personImg.png' alt='reference' />
      </div>
      <div className='reference-right-grid'>
        <div className='reference-headers'>
          <h3 className='animate__animated animate__flash'>
            Wat Onze Klanten Zeggen
          </h3>
        </div>
        <div className='reference-right-grid-text-holder'>
          <p>
            Bij Nexa bieden we een breed scala aan diensten om aan al uw
            digitale behoeften te voldoen. Of u nu op zoek bent naar krachtige
            .NET-oplossingen, boeiende ReactJs-websites, responsief ontwerp of
            een klantgerichte benadering, ons toegewijde team van professionals
            staat klaar om uw visie tot leven te brengen. Uw succes is onze
            prioriteit, en we streven ernaar om de best mogelijke resultaten te
            leveren voor uw project. Neem vandaag nog contact met ons op om te
            ontdekken hoe we uw online doelen kunnen verwezenlijken.
          </p>
        </div>
        <div className='reference-right-grid-button-holder'>
          <button>read more</button>
        </div>
      </div>
    </motion.div>
  );
};

export default Reference;
{
  /* <div>
        <div className='reference-right-grid'>
          <img src='../../src/assets/personImg.png' alt='happy person' />
        </div>
      </div>
      <img
        src='../../src/assets/vector2.png'
        alt=''
        className='reference-vector-2'
      />
      <img
        src='../../src/assets/vector3.png'
        alt=''
        className='reference-vector-3'
      />
    </div> */
}
