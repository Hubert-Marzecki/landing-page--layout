import { ReactComponent as EmpressiaLogo } from "../assets/header/logo-empressiaColor.svg";
import znanyLekarzLogo from "../assets/footer/logo_znanylekarzColor.png";
import stars from "../assets/footer/Element/Stars/5.svg";
import { ReactComponent as FacebookIcon } from "../assets/footer/icons/social/facebook.svg";
import { ReactComponent as InstagramIcon } from "../assets/footer/icons/social/instagram.svg";
import { ReactComponent as EmpressiaSygnet } from "../assets/footer/mark-empressiaColor.svg";

export default function Footer() {
  return (
    <>
      <footer className="footer ">
        <div className="footer__inside__container ">
          <div className="social__info  mx-auto flex items-center sm:flex-row flex-col ">
            <a className=" flex-grow  items-center md:justify-start justify-center ">
              <EmpressiaSygnet className="empressia__sygnet mb-10 sm:mb-0" />
            </a>
            <img src={stars} className="stars" />
            <span className="rating__data sm:ml-auto sm:mt-0 mt-1  justify-center sm:justify-start">
              5.0 (163 opinie) na
            </span>
            <img src={znanyLekarzLogo} className="znanyLekarz__logo mt-1 sm:mt-0" />
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-10  justify-center sm:justify-start">
              <a className="">
                <FacebookIcon className="social__icon social__icon--facebook" />
              </a>
              <a className="">
                <InstagramIcon className="social__icon" />
              </a>
            </span>
          </div>

          <div className="py-12 mx-auto">
            <div className="flex flex-wrap sm:flex-nowrap md:text-left text-center order-first">
              <div className="lg:w-5/12 md:w-1/2 w-full sm:mr-10 ">
                <p>
                  Jeżeli potrzebujesz pomocy związanej ze skórą, włosami,
                  paznokciami lub natury intymnej, jesteś we właściwym miejscu.
                </p>

                <nav className="mx-auto sm:flex sm:flex-wrap items-center mt-10 footer__nav">
                  <a className="mr-2 sm:mr-4">O mnie</a>
                  <a className="mr-2 sm:mr-4 ">Opinie</a>
                  <a className="mr-2 sm:mr-4">FAQ</a>
                  <a className="mr-2 sm:mr-4">Galeria</a>
                  <a className="mr-2 sm:mr-4">Blog</a>
                  <a className="">Kontakt</a>
                </nav>
              </div>
              <div className="lg:w-3/12 md:w-1/2 w-full mt-10 sm:mt-0 ">
                <h2 className="footer__section__title">
                  Pomagamy w przypadku
                </h2>
                <nav className="list-none mb-10">
                  <li className="footer__articel__link ">
                    <a className=" ">lorem ipsum dolor sit amet</a>
                  </li>
                  <li className="footer__articel__link ">
                    <a className="">dermoscopy</a>
                  </li>
                  <li className="footer__articel__link ">
                    <a className="">
                      skin biopsy with a histological examination
                    </a>
                  </li>
                  <li className="footer__articel__link ">
                    <a className="">
                      curettage e.g. focus of molluscum contagiosum
                    </a>
                  </li>
                  <li className="footer__articel__link ">
                    <a className="">electrocoagulation</a>
                  </li>
                </nav>
              </div>

              <div className="lg:w-4/12 md:w-1/2 w-full px-4">
                <h2 className="footer__section__title">
                  Najpopularniejsze wpisy
                </h2>
                <nav className="list-none mb-10">
                  <li className="footer__articel__link ">
                    <a className="">
                      Obowiązkowo na lato. 9 rzeczy, które warto wiedzieć o
                      filtrach SPF
                    </a>
                  </li>
                  <li  className="footer__articel__link ">
                    <a className="">
                      Jak walczyć z trądzikiem w każdym wieku?
                    </a>
                  </li>
                  <li  className="footer__articel__link ">
                    <a className="">
                      5 zasad bezpiecznego opalania
                    </a>
                  </li>
                  <li  className="footer__articel__link ">
                    <a className="">
                      Jak przygotować się do wizyty u dermatologa?
                    </a>
                  </li>
                  <li  className="footer__articel__link ">
                    <a className="">
                      Skutecznie pozbądź się zaczerwienień na twarzy
                    </a>
                  </li>
                </nav>
              </div>
            </div>
          </div>

          <div className="credits flex">
            <a className="mr-auto">
              <span className="">
                © 2020 Wszelkie prawa zastrzeżone. &nbsp;
              </span>
              <span className="policy__link">Polityka Prywatności</span>
            </a>

            <span className="sm:inline-flex ml-auto  sm:mt-0  items-center mt-10 text-center sm:text-left">
            Realizacja 
            <EmpressiaLogo className="empressia__logo mt-2 sm:mt-0 " />
            </span>

          </div>
        </div>
      </footer>
    </>
  );
}
