import React, { useEffect } from "react";
import "./Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div>
      <div className="container px-10 mx-auto mt-10 mb-20">
        <h1
          data-aos="slide-down"
          className="py-10 font-semibold sm:text-3xl md:text-5xl lg:text-6xl"
        >
          Contact Us & Follow Us
        </h1>

        <div className="grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4">
          <div
            data-aos="zoom-in-left"
            className="border-2 p-10 hover:bg-blue-600"
          >
            <h1 className="sm:text-3xl md:text-5xl lg:text-5xl  text-center hover:text-white">
              eSwap <small>Blogs</small>
            </h1>
          </div>
          <div
            data-aos="zoom-in-left"
            className=" border-2 p-10 hover:bg-blue-600"
          >
            <h1 className="sm:text-3xl md:text-5xl lg:text-5xl text-center hover:text-white">
              Facebook
            </h1>
          </div>
          <div
            data-aos="zoom-in-left"
            className=" border-2 p-10 hover:bg-blue-600"
          >
            <h1 className="sm:text-3xl md:text-5xl lg:text-5xl text-center hover:text-white">
              LinkedIn
            </h1>
          </div>
          <div
            data-aos="zoom-in-left"
            className=" border-2 p-10 hover:bg-blue-600"
          >
            <h1 className="sm:text-3xl md:text-5xl lg:text-5xl text-center hover:text-white">
              Twitter
            </h1>
          </div>
        </div>
      </div>

      <div className="contact-bg-blue">
        <div className="container px-20 mx-auto mt-10 mb-20">
          <h1
            data-aos="slide-right"
            className="pt-20 text-center text-white sm:text-3xl md:text-5xl lg:text-7xl"
          >
            Create, Manage & Grow Your Online Presence with eSwap.
          </h1>

          <div data-aos="slide-up" className="text-center pt-5">
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              Let's Go
            </button>
          </div>
        </div>
      </div>

      <div className="container px-16 mx-auto mt-10 mb-20">
        <div className="flex justify-between border-t-2 border-b-2 p-8 mb-4">
          <div data-aos="slide-right">
            <h1 className="sm:text-base md:text-xl lg:text-2xl font-extrabold">
              Get 24/7 Support
            </h1>
            <p>
              Ask questions, watch tutorials, browse articles or contact an
              agent.
            </p>
          </div>
          <div data-aos="slide-left">
            <p className="border-b-2">Tour the help center</p>
          </div>
        </div>

        <div className="flex justify-between border-t-2 border-b-2 p-8 mb-4">
          <div data-aos="slide-right">
            <h1 className="sm:text-base md:text-xl lg:text-2xl font-extrabold">
              Become a a2wist Partner
            </h1>
            <p>Get professional resources to grow your agency with a2wist.</p>
          </div>
          <div data-aos="slide-left">
            <p className="border-b-2">Learn More</p>
          </div>
        </div>

        <div className="flex justify-between border-t-2 border-b-2 p-8 mb-4">
          <div data-aos="slide-right">
            <h1 className="sm:text-base md:text-xl lg:text-2xl font-extrabold">
              Work with Us
            </h1>
            <p>
              Explore our job opportunities and shape the future of the web.
            </p>
          </div>
          <div data-aos="slide-left">
            <p className="border-b-2">Discover Available Position</p>
          </div>
        </div>
      </div>

      <div className="contact-design">
        <div className="container px-10 mx-auto mt-10 mb-20">
          <h1
            data-aos="slide-up"
            class="py-5  text-white sm:text-xl md:text-5xl lg:text-7xl"
          >
            Contact Us
          </h1>
          <p data-aos="slide-up" class="py-5  text-white ">
            Get in touch with the right people at Squarespace. Email a member of
            <br />
            our customer care team, marketing team, technical team or HR team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
