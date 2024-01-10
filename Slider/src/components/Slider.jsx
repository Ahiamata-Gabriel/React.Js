import React, { useState } from 'react';
import './Slider.css';
import { sliderItems } from '../assets/data';

const Slider = () => {
  const [slideindex, setslideindex] = useState(0);

  const handleClick = (direction) => {
    if (direction === 'left') {
      setslideindex(slideindex > 0 ? slideindex - 1 : sliderItems.length - 1);
    } else {
      setslideindex(slideindex < sliderItems.length - 1 ? slideindex + 1 : 0);
    }
  };

  return (
    <div className="Container">
      <div className="LeftArrowContainer" onClick={() => handleClick('left')}>
        <ion-icon name="arrow-back-outline"></ion-icon>
      </div>
      <div
        className="Wrapper"
        style={{ transform: `translateX(${slideindex * -100}vw)` }}
      >
        {sliderItems.map((sliderItem) => (
          <div
            className="Slide"
            key={sliderItem.id}
            // style={{ backgroundImage: `url(${sliderItem.image})` }}
            style={{
              background: `linear-gradient(rgba(255, 255, 255, 0.5),rgba(255, 255, 255, 0.5)), url(${sliderItem.image})`,
            }}
          >
            <div className="Image__Container">
              <img className="Image" src={sliderItem.image} alt="" />
            </div>
            <div className="Info__Container">
              <h3 className="Title">{sliderItem.title}</h3>
              <p className="Desc">{sliderItem.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="RightArrowContainer" onClick={() => handleClick('right')}>
        <ion-icon name="arrow-forward-outline"></ion-icon>
      </div>
    </div>
  );
};

export default Slider;
