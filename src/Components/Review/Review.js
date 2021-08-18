import React from 'react';
import ReviewCard from './ReviewCard';

const Review = () => {

  const reviews =[
      {
          name: 'Karim',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, nisi! Id.Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, nisi! Id.',
          img: 'https://images.unsplash.com/photo-1629241292555-793d5de3bb74?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
      },
      {
        name: 'Rahim',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, nisi! Id.Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, nisi! Id.',
        img: 'https://images.unsplash.com/photo-1629241292555-793d5de3bb74?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
      },
      {
        name: 'Dalim',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, nisi! Id.Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, nisi! Id.',
        img: 'https://images.unsplash.com/photo-1629241292555-793d5de3bb74?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
      },
  ]



    return (
        <div className="px-10 mx-auto">
      <div className="my-6">
        <h1 className=" font-extrabold text-3xl">Customer Reviews ( 3397 )</h1>
      </div>

      <div className="bg-gray-200 rounded p-6">
        <div className="flex justify-between">
          <div>
            <p className="font-semibold text-2xl">Avarage Rating</p>
            
            <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
</svg>

<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
</svg>

<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
</svg>

<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
</svg>
            </div>
            
            {/* <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon /> */}
          </div>
          <div>
            <p className="text-2xl font-semibold">Did the item fit well?</p>
            <div className="py-6">
              <div class="relative pt-1">
                <div className="pb-2">
                  <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-purple-200">
                    Small 30%
                  </span>
                </div>
                <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200">
                  <div
                    style={{ width: "30%" }}
                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"
                  ></div>
                </div>
              </div>
              <div class="relative pt-1">
                <div className="pb-2">
                  <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-purple-200">
                    Medium 80%
                  </span>
                </div>

                <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200">
                  <div
                    style={{ width: "80%" }}
                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"
                  ></div>
                </div>
              </div>
              <div class="relative pt-1">
                <div className="pb-2">
                  <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-purple-200">
                    Large 60%
                  </span>
                </div>

                <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200">
                  <div
                    style={{ width: "60%" }}
                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="my-10  container mx-auto px-10">
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-x-8 gap-y-12">
        {reviews.map((review) => (
          <ReviewCard review={review} />
        ))}
      </div>
    </div>


      
    </div>
    );
};

export default Review;