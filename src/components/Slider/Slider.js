import React, { useEffect, useState } from "react";
import "../../Styles/slider.scss";

const fakeData = [
  { name: "Female Cloth", price: 435 },
  { name: "Smart Phone", price: 4545 },
  { name: "Shoe", price: 425 },
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

  useEffect(() => {
    if (!hover) {
      setTimeout(() => {
        const nextItem = activeItem === 2 ? 0 : activeItem + 1;
        setActiveItem(nextItem);
        setData(fakeData[nextItem]);
      }, 3000);
    }
  }, [activeItem, hover]);

  return (
    <div className="slider">
      <div
        onMouseLeave={handleLeave}
        onMouseEnter={handleHover}
        className={"slider__item " + className}
      >
        <div className="slider__item__info">
          <div>
            <p>New Inspiration 2021</p>
            <h1>{data.name}</h1>
            <h3>Check Out The Latest Deals on Cell Phones</h3>
            <button>Shop Now</button>
          </div>
        </div>
        <div className="slider__item__image">
          <img src="https://picsum.photos/600/400" alt="" />
        </div>
      </div>
      <div className="slider__btns">
        {fakeData.map((item, index) => {
          let className = "";
          if (index === activeItem) {
            className = "active";
          }
          return (
            <span className={"slider__button " + className} key={index}></span>
          );
        })}
      </div>
    </div>
  );
}
