import React, { useEffect, useState } from "react";
import "animate.css";
import "./ReferenceStyles.css";
import { motion } from "framer-motion";
import { gegevens } from "../Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAlignLeft,
  faHandsHoldingCircle,
  faLeftLong,
  faRightLong,
} from "@fortawesome/free-solid-svg-icons";

const Reference = () => {
  //slider
  const [currentIndex, setCurrentIndex] = useState(0);
  const previous = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? gegevens.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const next = () => {
    const isLastSlider = currentIndex === gegevens.length - 1;
    const newIndex = isLastSlider ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      next();
    }, 4000);

    // Stop het interval wanneer de component wordt ge-unmount
    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);
  return (
    <div id='reference'>
      <h3 style={{ textAlign: "center" }}>Referenties</h3>
      <div className='slider-container'>
        <button onClick={previous} id='prev'>
          <FontAwesomeIcon icon={faLeftLong} style={{ color: "#5680c8" }} />
        </button>
        <div className='card'>
          <img src={gegevens[currentIndex].img} alt='' />
          <div className='card-text'>
            <p>{gegevens[currentIndex].text}</p>
          </div>
          <div className='card-person-name'>
            <p>{gegevens[currentIndex].personName}</p>
          </div>
        </div>

        <button onClick={next} id='next'>
          <FontAwesomeIcon icon={faRightLong} style={{ color: "#5680c8" }} />
        </button>
      </div>
    </div>
  );
};

export default Reference;
