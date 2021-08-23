import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const ReviewCard = ({review}) => {

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

    return (
        <div data-aos="zoom-in-left" className="mx-auto">
        <div class="max-w-sm  w-full lg:max-w-full lg:flex">
              <div class="bg-indigo-100 border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div class="mb-8">
                  <div class="text-gray-900 font-bold text-xl mb-2">
                    {review.name}
                  </div>
                  <p class="text-gray-700 text-base">
                  {review.content}
                  </p>
                </div>
                <div class="flex items-center">
                  <img
                    class="w-20 h-20 rounded-full mr-4"
                    src={review.img}
                    alt="Avatar of Jonathan Reinink"
                  />
                  <div class="text-sm">
                    <p class="text-gray-900 leading-none">Jonathan Reinink</p>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
</svg>
                    <p class="text-gray-600">Aug 18</p>
                  </div>
                </div>
              </div>
            </div>
      </div>
    )
}

export default ReviewCard
