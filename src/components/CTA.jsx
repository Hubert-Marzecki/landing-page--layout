import Carousel from "react-elastic-carousel";
import check from "../assets/section--cta/check/check-6/icons/ui/check.svg";
import { Link,  BrowserRouter as Router } from "react-router-dom";

export default function CTA() {
  return (
    <>
      <section
        className="cta__section flex flex-wrap items-center container m-0 "
        data-aos="zoom-out-up"
      >
        <div className="sm:w-1/2 flex flex-wrap">
          <div className="w-1/6"></div>
          <div>
            <h3 className="cta__header">
              Zapisz się na <br /> wizytę on-line
            </h3>
            <Router >

            <Link to="">
              <button className="cta__button">
                {" "}
                Zarezerwuj termin już teraz{" "}
              </button>
            </Link>
            </Router>

          </div>
        </div>
        <div className="sm:w-1/2 flex flex-wrap">
          <div className="w-1/6"></div>
          <div>
            <p className="cta__checkmarks ">
              <img src={check} className="checkmark__icon" />
              konsultacja bez zakładania konta
            </p>
            <p className="cta__checkmarks ">
              <img src={check} className="checkmark__icon" />
              pełna dyskrecja
            </p>
            <p className="cta__checkmarks ">
              <img src={check} className="checkmark__icon" />
              kontakt prz Skype lub WhatsApp
            </p>
            <p className="cta__checkmarks ">
              <img src={check} className="checkmark__icon" />
              rezerwacja terminu on-line
            </p>
            <p className="cta__checkmarks ">
              <img src={check} className="checkmark__icon" />
              szybkość i prostota
            </p>
            <p className="cta__checkmarks ">
              <img src={check} className="checkmark__icon" />
              video konsultacja
            </p>
            <p className="cta__checkmarks ">
              <img src={check} className="checkmark__icon" />
              e-recepta i e-zwolnienie
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
