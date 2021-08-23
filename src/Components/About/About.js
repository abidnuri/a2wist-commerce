import React, { useEffect } from "react";
import "./About.css";
import { FaStackExchange } from "react-icons/fa";
import { FaSteamSquare } from "react-icons/fa";
import { FaCommentMedical } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div>
      <div className="px-10 container mx-auto">
        <div className="my-8">
          <h1 data-aos="slide-down" className="text-6xl font-extrabold text-center">Our Story</h1>

          <div className="my-2">
            <div  className="flex justify-between">
              <div data-aos="slide-right" className="p-3">
                <p className="py-4 text-gray-500 sm:text-base md:text-xl lg:text-xl">
                  For over 20 years, we’ve partnered with hundreds of thousands 
                  of artists, promoting their independent art to millions of 
                  fans around the world. 
                </p>
                <p className="pb-4 text-gray-500 sm:text-base md:text-xl lg:text-xl">
                  But what’s our comic-book origin story? In 2000, we began as a 
                  t-shirt company based in our beloved hometown of Chicago. 
                  Since then, we’ve evolved into a fully remote company with
                  
                </p>
                <p className="pb-4 text-gray-500 sm:text-base md:text-xl lg:text-xl">
                  we celebrate the unique diversity that shapes each of us as
                  human beings. 
                </p>
              </div>
              <div data-aos="slide-left" className="p-3">
                <p className="py-4 text-gray-500 sm:text-base md:text-xl lg:text-xl">
                  Every purchase you make directly supports the artist who made
                  the design. With every design you score and every Design
                  Challenge you vote for.
                </p>
                <p className="pb-4 text-gray-500 sm:text-base md:text-xl lg:text-xl">
                  Sustainability influences everything we do, from our
                  partnerships to our printing processes. Eco-friendly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-design">
        <div className="container pt-20 px-10 mx-auto mt-10 mb-20">
          <h1 data-aos="slide-down" class=" pt-20 text-center font-extrabold text-white sm:text-xl md:text-5xl lg:text-7xl">
            Delivering Happiness on the Go !!
          </h1>
          <p class="mt-10 text-2xl text-center text-white">Happy Shopping</p>
        </div>
      </div>

      <div className="py-10">
        <h1 data-aos="slide-up" className="text-6xl font-extrabold my-6 text-center">Our Values</h1>

        <div className="container sm:px-10 md:px-20 lg:px-20 mx-auto">
          <div className="grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-2">
            <div data-aos="slide-right" className="bg-blue-800 ">
              <div className="flex items-center justify-between sm:mt-8 md:mt-14 lg:mt-14">
                <div className="mx-auto p-4">
                  <FaStackExchange className="text-red-500 sm:text-2xl md:text-4xl lg:text-7xl " />
                </div>
                <div style={{ textAlign: "left" }} className="px-2">
                  <h1 className="text-2xl font-semibold text-white">
                    Embrace Change
                  </h1>
                  <p className="text-white">
                    we embrace and anticlpate change <br /> Change is Growth,
                    and growth is what drives us every day.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="mx-auto p-4">
                  <FaSteamSquare className="text-green-500 sm:text-2xl md:text-4xl lg:text-7xl " />
                </div>
                <div style={{ textAlign: "left" }} className="px-2">
                  <h1 className="text-2xl font-semibold text-white">
                    Teamwork
                  </h1>
                  <p className="text-white">
                    we embrace and anticlpate change <br /> Change is Growth,
                    and growth is what drives us every day.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="mx-auto p-4">
                  <FaCommentMedical className="text-red-800 sm:text-2xl md:text-4xl lg:text-7xl " />
                </div>
                <div style={{ textAlign: "left" }} className="px-2">
                  <h1 className="text-2xl font-semibold text-white">
                    Customer Commltment
                  </h1>
                  <p className="text-white">
                    we embrace and anticlpate change <br /> Change is Growth,
                    and growth is what drives us every day.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="mx-auto p-4">
                  <FaHandsHelping className="text-white sm:text-2xl md:text-4xl lg:text-7xl " />
                </div>
                <div style={{ textAlign: "left" }} className="px-2">
                  <h1 className="text-2xl font-semibold text-white">
                    Integrity
                  </h1>
                  <p className="text-white">
                    we embrace and anticlpate change <br /> Change is Growth,
                    and growth is what drives us every day.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="mx-auto p-4">
                  <FaInfoCircle className="text-indigo-200 sm:text-2xl md:text-4xl lg:text-7xl " />
                </div>
                <div style={{ textAlign: "left" }} className="px-2">
                  <h1 className="text-2xl font-semibold text-white">
                    Ownership
                  </h1>
                  <p className="text-white">
                    we embrace and anticlpate change <br /> Change is Growth,
                    and growth is what drives us every day.
                  </p>
                </div>
              </div>
            </div>

            <div data-aos="slide-left">
              <img
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1545631036-0604522cf8a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
