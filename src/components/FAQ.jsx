import FAQimage from "../assets/section--faq/illustration-faq.png";

export default function FQA() {
  return (
    <>
      <div className="faq__section flex container m-0 ">
        <div className="sm:w-1/2">
          <div className="info__holder">
            <h3 className="faq__header"> Najczęściej zadawane pytania </h3>
            <button className="faq__button">Sprawdź całe FAQ</button>
          </div>
          <div className="img__holder">
          <img className="faq__image" src={FAQimage} />
          </div>
        </div>
        <div className="bg-red-100 sm:w-1/2">
        </div>
      </div>
    </>
  );
}
