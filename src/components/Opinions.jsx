import { useState } from "react";

import options from "../elements/opinions";
import Carousel from "react-elastic-carousel";

export default function Opinions() {
  const [breakPoints] = useState([
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 3.3, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ]);

  return (
    <>
     <h2 className="text-center my-4"> Co mówią zadowoleni klienci </h2>
      <div className="bg-blue-400 options__section relative">
      {/* <div className=" bg-blue-500 h-full absolute z-10 left-0"> BBB </div> */}
      <div className="card__vanish bg-blue-500 h-full absolute z-10 right-0 w-25">  </div>

        <Carousel breakPoints={breakPoints} className="carousel relative">

          {options.map((item) => {
            return (
              <div class="opinion__card bg-white p-8 mr-4 ml-0 rounded">
                <p class="leading-relaxed mb-6">{item.text}</p>
                <a class="inline-flex items-center">
                  <img
                    alt="userImg"
                    src="https://dummyimage.com/106x106"
                    class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span class="flex-grow flex flex-col pl-4">
                    <span class="title-font font-medium text-gray-900">
                      {item.userName}
                    </span>
                    {/* <span class="text-gray-500 text-sm">UI DEVELOPER</span> */}
                  </span>
                </a>
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
}
