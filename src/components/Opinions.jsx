import { useState } from "react";

import options from "../elements/opinions";
import Carousel from "react-elastic-carousel";
import stars from '../assets/section--opinions/card-opinion-opinions/default/opinions/default/Element/Stars/5.svg'
import userBlankAvatar from '../assets/section--opinions/card-opinion-opinions/default/opinions/default/icon.svg'

export default function Opinions() {
  const [breakPoints] = useState([
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 3.3, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 3.3 },
    { width: 1750, itemsToShow: 5.3 },
  ]);


  return (
    <section className="opinions__section__wrapper" >
      <div className="opinions__section">

     <h2 className="text-center my-4 section__header"> Co mówią zadowoleni klienci </h2>
      <div className="opinions__carousel__wrapper relative">
      {/* <div className=" bg-blue-500 h-full absolute z-10 left-0"> BBB </div> */}
      <div className="card__vanish  h-full absolute z-10 right-0 w-25">  </div>

        <Carousel breakPoints={breakPoints}  className="carousel relative">

          {options.map((item) => {
            return (
              <div class="opinion__card bg-white p-8 ">
                <div className="opinion__data flex ">
                    <img className="stars__image" src={stars} />
                    <span className="data__date ml-auto mr-2 ">{item.date} </span>
                </div>
                <p class="mt-8 mb-6 card__text">{item.text}</p>
                <div class="user__info flex items-center">
                  
                  <img
                    alt="userImg"
                    src={item.userName === "" ?  userBlankAvatar : "https://dummyimage.com/106x106"}
                    class="user__img "
                  />
                  <span class="flex-grow flex flex-col pl-4">
                    <span class="title-font font-medium text-gray-900">
                      {item.userName}
                    </span>
                    {/* <span class="text-gray-500 text-sm">UI DEVELOPER</span> */}
                  </span>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
      </div>

    </section>
  );
}
