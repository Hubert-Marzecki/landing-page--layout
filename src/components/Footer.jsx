import { ReactComponent as EmpressiaLogo } from "../assets/header/logo-empressiaColor.svg";
import znanyLekarzLogo from "../assets/footer/logo_znanylekarzColor.png";
import stars from "../assets/footer/Element/Stars/5.svg";
import { ReactComponent as FacebookIcon } from "../assets/footer/icons/social/facebook.svg";
import { ReactComponent as InstagramIcon } from "../assets/footer/icons/social/instagram.svg";
import { ReactComponent as EmpressiaSygnet } from "../assets/footer/mark-empressiaColor.svg";
import { Link, BrowserRouter as Router } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="footer ">
        <div className="footer__inside__container ">
          <div className="social__info  mx-auto flex items-center sm:flex-row flex-col ">
            <div className=" flex-grow  items-center md:justify-start justify-center ">
              <EmpressiaSygnet className="empressia__sygnet mb-10 sm:mb-0" />
            </div>
            <img
              src={stars}
              className="stars"
              alt="kolorowe logo agencji empressia"
            />
            <span className="rating__data sm:ml-auto sm:mt-0 mt-1  justify-center sm:justify-start">
              5.0 (163 opinie) na
            </span>
            <img
              src={znanyLekarzLogo}
              className="znanyLekarz__logo mt-1 sm:mt-0"
              alt="logo portalu znanylekarz.pl"
            />
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-10  justify-center sm:justify-start">
              <a href="/#" className="">
                <FacebookIcon className="social__icon social__icon--facebook" />
              </a>
              <a href="/#" className="">
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
                  <Router>
                    <Link to="" className="nav__link ">
                      O mnie
                    </Link>
                    <Link to="" className=" nav__link  ">
                      Opinie
                    </Link>
                    <Link to="" className=" nav__link ">
                      FAQ
                    </Link>
                    <Link to="" className="nav__link ">
                      Galeria
                    </Link>
                    <Link to="" className="nav__link ">
                      Blog
                    </Link>
                    <Link to="" className="">
                      Kontakt
                    </Link>
                  </Router>
                </nav>
              </div>
              <div className="lg:w-3/12 md:w-1/2 w-full mt-10 sm:mt-0 lg:ml-20">
                <h2 className="footer__section__title">Pomagamy w przypadku</h2>
                <nav className="list-none mb-10">
                  <Router>
                    <li className="footer__articel__link ">
                      <Link to="" className=" ">
                        lorem ipsum dolor sit amet
                      </Link>
                    </li>
                    <li className="footer__articel__link ">
                      <Link to="" className="">
                        dermoscopy
                      </Link>
                    </li>
                    <li className="footer__articel__link ">
                      <Link to="" className="">
                        skin biopsy with a histological examination
                      </Link>
                    </li>
                    <li className="footer__articel__link ">
                      <Link to="" className="">
                        curettage e.g. focus of molluscum contagiosum
                      </Link>
                    </li>
                    <li className="footer__articel__link ">
                      <Link to="" className="">
                        electrocoagulation
                      </Link>
                    </li>
                  </Router>
                </nav>
              </div>

              <div className="lg:w-4/12 md:w-1/2 w-full px-4">
                <h2 className="footer__section__title">
                  Najpopularniejsze wpisy
                </h2>
                <nav className="list-none mb-10">
                  <Router>
                    <li className="footer__articel__link ">
                      <Link to="" className="">
                        Obowiązkowo na lato. 9 rzeczy, które warto wiedzieć o
                        filtrach SPF
                      </Link>
                    </li>
                    <li className="footer__articel__link ">
                      <Link to="" className="">
                        Jak walczyć z trądzikiem w każdym wieku?
                      </Link>
                    </li>
                    <li className="footer__articel__link ">
                      <Link to="" className="">
                        5 zasad bezpiecznego opalania
                      </Link>
                    </li>
                    <li className="footer__articel__link ">
                      <Link to="" className="">
                        Jak przygotować się do wizyty u dermatologa?
                      </Link>
                    </li>
                    <li className="footer__articel__link ">
                      <Link to="" className="">
                        Skutecznie pozbądź się zaczerwienień na twarzy
                      </Link>
                    </li>
                  </Router>
                </nav>
              </div>
            </div>
          </div>

          <div className="credits flex flex-wrap sm:flex-nowrap mb-10">
            <div className="mr-auto">
              <span className="">
                © 2020 Wszelkie prawa zastrzeżone. &nbsp;
              </span>
              <Router>
                <Link to="" className="policy__link">
                  Polityka Prywatności
                </Link>
              </Router>
            </div>
            <span className="sm:inline-flex ml-auto mr-auto sm:mr-0 sm:mt-0  items-center mt-10 text-center sm:text-left">
              Realizacja
              <EmpressiaLogo className="empressia__logo mt-2 sm:mt-0 " />
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
