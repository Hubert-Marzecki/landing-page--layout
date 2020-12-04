import Carousel from "react-elastic-carousel";

export default function CTA() {
  return (
    <>
      <section className="cta__section bg-green-100 flex flex-wrap container m-0 ">
        <div className=" sm:w-1/2">
          <div>
            <h1>
              {" "}
              Zapisz się na wizytę <br /> on-pne
            </h1>
            <p>
              Jeżep potrzebujesz pomocy związanej ze skórą, włosami, paznokciami
              lub natury intymnej, jesteś we właściwym miejscu. Dzięki naszej
              pomocy zadbasz o zdrowie i piękno swego ciała.
            </p>
            <button> Zarezerwuj termin już teraz </button>
          </div>
        </div>
        <div className=" sm:w-1/2">
          {/* <Carousel verticalMode itemsToShow={3}> */}
          <p>konsultacja bez zakładania konta</p>
          <p>pełna dyskrecja</p>
          <p>kontakt prz Skype lub WhatsApp</p>
          <p>rezerwacja terminu on-line</p>
          <p>szybkość i prostota</p>
          <p>video konsultacja</p>
          <p>e-recepta i e-zwolnienie</p>
          {/* </Carousel> */}
        </div>
      </section>
    </>
  );
}
