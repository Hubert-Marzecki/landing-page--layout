import { ReactComponent as EmpressiaLogo } from "../assets/header/logo-empressiaColor.svg";
import heroImg from "../assets/section--intro/illustration-hero.png";

export default function Hero() {
  return (
      <section className="hero__section flex flex-wrap  ">
        <div className="sm:w-6/12">
          <div>
            <h1 className="header__big"> Konsultacje z lekarzami online </h1>
            <p className="text__plain">
              Jeżeli potrzebujesz pomocy związanej ze skórą, włosami,
              paznokciami lub natury intymnej, jesteś we właściwym miejscu.
              Dzięki naszej pomocy zadbasz o zdrowie i piękno swego ciała.
            </p>
          </div>
          <div className="buttons__holder flex flex-wrap sm:flex-no-wrap">
            <button className="pl-6 button__reservation flex flex-row items-center">
              Zarezerwuj termin <div className="button__element ml-4  h-full items-center flex align-center justify-center relative"> <span className="oval"> </span> </div>
            </button>
            <button className="button__faq"> Jak to działa </button>
          </div>
        </div>
        <div className="sm:w-6/12 image__holder">
          <img src={heroImg} className="hero__image" />
        </div>
      </section>
  );
}

