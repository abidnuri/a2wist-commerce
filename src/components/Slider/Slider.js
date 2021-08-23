import React, { useEffect, useState } from "react";
import "../../Styles/slider.scss";
import slider1 from "../../img/slider1.jpg";
import slider2 from "../../img/slider2.jpg";
import slider3 from "../../img/slider3.jpg";
import slider4 from "../../img/slider4.jpg";
import slider5 from "../../img/slider5.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const fakeData = [
  {
    name: "The Denim",
    description: "The Latest Trend",
    price: 435,
    img: slider1,
  },
  {
    name: "Sweat Shirt",
    description: "New Innovation",
    price: 4545,
    img: slider2,
  },
  {
    name: "Denim & Jeans",
    description: "Stylish Shirt",
    price: 4545,
    img: slider3,
  },
  {
    name: "Short Shirt",
    description: "The Ultimate Design",
    price: 4545,
    img: slider4,
  },
  {
    name: "Long Shirt",
    description: "Most Popular",
    price: 4545,
    img: slider5,
  },
];

export default function Slider() {
  const [activeItem, setActiveItem] = useState(0);
  const [data, setData] = useState(fakeData[activeItem]);
  const [hover, setHover] = useState(false);
  const [className, setClassName] = useState("slider__running");

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);


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
          <h3 data-aos="slide-down" className="mt-20 sm:text-xl md:text-3xl lg:text-3xl">{data.description}</h3>
          <h1 data-aos="slide-down" className="sm:text-2xl md:text-5xl lg:text-8xl lg:mb-6">{data.name}</h1>
          <h3 data-aos="slide-down">Check Out The Latest Deals On Clothes</h3>
          
          <div className="mt-4">
          <button data-aos="slide-down" className="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded">
          Shop Now
          </button>
          </div>
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
          <img className="h-full w-screen object-cover" src={data.img} alt="" />
        </div>
      </div>
    </div>
  );
}
