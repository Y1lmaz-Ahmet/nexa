import React from "react";
import "./ProductenStyles.css";
import Product from "./Product";
const Producten = () => {
  return (
    <div id='producten'>
      <Product
        title='De Kracht van Responsief Webdesign'
        subheader='Het belang van een naadloze ervaring op alle apparaten'
        text='Bij Nexa begrijpen we het belang van responsief webdesign. In de moderne wereld is het hebben van een website die op alle apparaten goed werkt, van cruciaal belang. Of uw bezoekers nu op een desktopcomputer, tablet of smartphone zitten.'
        btnTxt='read more'
        pic='https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=400'
      />
      <Product
        title='Kleurpsychologie in Webdesign'
        subheader='Hoe kleuren uw merk en gebruikerservaring beïnvloeden'
        text='Bij Nexa begrijpen we dat kleur meer is dan alleen esthetiek. Kleur heeft de kracht om emoties op te roepen, merken te definiëren en gebruikerservaringen te vormen. Het is een taal die we spreken met ons ontwerp, en we nemen deze taak serieus.'
        btnTxt='read more'
        pic='https://images.pexels.com/photos/1209843/pexels-photo-1209843.jpeg?auto=compress&cs=tinysrgb&w=400'
      />
      <Product
        title='Trends om in de gaten te houden'
        subheader='Wat brengt de komende jaren voor webontwikkeling?'
        text='Bij Nexa zijn we altijd op zoek naar de nieuwste trends en ontwikkelingen in webontwikkeling. De technologische wereld evolueert voortdurend, en het is onze missie om onze klanten voorop te laten lopen en hen te voorzien van cutting-edge oplossingen.'
        btnTxt='read more'
        pic='https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400'
      />
    </div>
  );
};

export default Producten;
