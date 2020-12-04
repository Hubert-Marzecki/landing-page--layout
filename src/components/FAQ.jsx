import FAQimage from "../assets/section--faq/illustration-faq.png";

export default function FQA() {
  return (
    <>
      <div className="faq__section bg-red-100 flex container m-0 ">
        <div className="bg-red-100 sm:w-1/2">
          <div>
            <h4> Najczęściej zadawane pytania </h4>
            <button>Sprawdź całe FAQ</button>
            <img src={FAQimage} />
          </div>
        </div>
        <div className="bg-red-100 sm:w-1/2">
        </div>
      </div>
    </>
  );
}
