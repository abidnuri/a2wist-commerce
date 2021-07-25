import React, { useEffect, useState } from "react";
import "../../Styles/slider.scss";
import slider1 from "../../img/slider1.jpg";
import slider2 from "../../img/slider2.jpg";
import slider3 from "../../img/slider3.jpg";
import slider4 from "../../img/slider4.jpg";
import slider5 from "../../img/slider5.png";

const fakeData = [
  { name: "Female Cloth", price: 435, img: slider1 },
  { name: "Smart Phone", price: 4545, img: slider2 },
  { name: "Shoe", price: 425, img: slider3 },
  { name: "Shoe", price: 425, img: slider4 },
  { name: "Shoe", price: 425, img: slider5 },
];

export default function Slider() {
  const [activeItem, setActiveItem] = useState(0);
  const [data, setData] = useState(fakeData[activeItem]);
  const [hover, setHover] = useState(false);
  const [className, setClassName] = useState("slider__running");

  const handleHover = () => {
    setClassName("slider__paused");
    setHover(true);
  };
  const handleLeave = () => {
    setClassName("slider__running");
    setHover(false);
  };

  const handleActiveItem = (item) => {
    setActiveItem(item);
    setData(fakeData[item]);
  };

  useEffect(() => {
    if (!hover) {
      setTimeout(() => {
        const nextItem = activeItem === 4 ? 0 : activeItem + 1;
        handleActiveItem(nextItem);
      }, 5000);
    }
  }, [activeItem, hover]);

  return (
    <div className="slider">
      <div className={"slider__item " + className}>
        <div className="slider__item__info">
          <h3>New Inspiration 2021</h3>
          <h1>
            {data.name} {activeItem}
          </h1>
          <h3>Check Out The Latest Deals on Cell Phones</h3>
          <button>Shop Now</button>
        </div>
        <div
          className="slider__item__btns"
          onMouseLeave={handleLeave}
          onMouseEnter={handleHover}
        >
          {fakeData.map((item, index) => {
            let className = "";
            if (index === activeItem) {
              className = "active";
            }
            return (
              <span
                className={"slider__button " + className}
                onClick={() => handleActiveItem(index)}
                key={index}
              ></span>
            );
          })}
        </div>
        <div className="slider__item__image">
          <img src={data.img} alt="" />
        </div>
      </div>
    </div>
  );
}
