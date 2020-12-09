import seoTrigger from "../elements/seoTriggers";
import uuid from "react-uuid";

export default function SeoFriend() {
  return (
    <>
      <div className="seo__section grid-cols-1 md:grid-cols-3 grid gap-4 ">
        {seoTrigger.map((item) => {
          return (
            <div className="w-full text-center seo__tile" key={uuid()}>
              <img
                src={item.img}
                className="text-center mx-auto"
                alt={item.alt}
              />
              <h5 className="tile__header">{item.title}</h5>
              <p className="tile__text">{item.text}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
