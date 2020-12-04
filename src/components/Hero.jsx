import { ReactComponent as EmpressiaLogo } from "../assets/header/logo-empressiaColor.svg";
import heroImg from "../assets/section--intro/illustration-hero.png";

export default function Hero() {
  return (
    <>
      <section className="hero__section flex flex-wrap container m-0 ">
        <div className="bg-blue-100 sm:w-1/2">
          <div>
            <h1> Konsultacje z lekarzami online </h1>
            <p>
              Jeżeli potrzebujesz pomocy związanej ze skórą, włosami,
              paznokciami lub natury intymnej, jesteś we właściwym miejscu.
              Dzięki naszej pomocy zadbasz o zdrowie i piękno swego ciała.
            </p>
          </div>
          <div>
            <button>
              Zarezerwuj termin <span> X </span>
            </button>
            <button> Jak to działa</button>
          </div>
        </div>
        <div className="bg-blue-100 sm:w-1/2">
          <img src={heroImg} />
        </div>
      </section>
    </>
  );
}

