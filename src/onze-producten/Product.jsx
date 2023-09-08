import React from "react";
import "./ProductenStyles.css";
const Product = ({ title, subheader, text, btnTxt, pic }) => {
  return (
    <article className='product'>
      <img src={pic} alt='product 1' />
      <div className='producten-headers'>
        <h1>{title}</h1>
        <h3>{subheader}</h3>
      </div>
      <div className='producten-text'>
        <p>{text}</p>
      </div>
      <div className='producten-button'>
        <button>{btnTxt}</button>
      </div>
    </article>
  );
};

export default Product;
