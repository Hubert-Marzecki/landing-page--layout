import { useState } from "react";

import options from "../elements/opinions";
import Carousel from "react-elastic-carousel";
import OpinionTile from "./OpinionTile";
import uuid from "react-uuid";

export default function Opinions() {
  const [breakPoints] = useState([
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1.4, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 1.4 },
    { width: 1150, itemsToShow: 2.8, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 2.3 },
    { width: 1750, itemsToShow: 3.3 },
  ]);

  return (
    <section className="opinions__section__wrapper">
      <div className="opinions__section">
        <h2 className="text-center my-4 section__header">
          Co mówią zadowoleni klienci
        </h2>
        <div className="opinions__carousel__wrapper relative">
          <div className="card__vanish  h-full absolute z-10 right-0 w-25"></div>

          <Carousel breakPoints={breakPoints} className="carousel relative">
            {options.map((item) => {
              return <OpinionTile opinion={item} key={uuid()} />;
            })}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
